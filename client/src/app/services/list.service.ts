import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseHandlerService } from '../database-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listsSubject = new BehaviorSubject<Array<{ id?: number, name: string, amount?: number, items?: string[] }>>([]);
  private currentHouseholdId: number = 1; // UHID for TestHousehold
  
  constructor(private dbHandler: DatabaseHandlerService) {
    this.loadListsFromDatabase().subscribe();
  }
  
  /**
   * Load all lists from database and update the subject
   * Returns an observable that completes when the load is done
   */
  private loadListsFromDatabase(): Observable<void> {
    return new Observable(observer => {
      this.dbHandler.getAllNotes(this.currentHouseholdId).subscribe({
        next: (notes) => {
          // Filter to only top-level lists (parentId is null)
          const topLevelLists = notes.filter((note: any) => note.parentId === null || note.parentId === undefined);
          
          // For each list, find its items (notes where parentId matches the list's UNID)
          const transformedLists = topLevelLists.map((list: any) => {
            const items = notes
              .filter((note: any) => note.parentId === list.UNID)
              .map((note: any) => note.text);
            
            return {
              id: list.UNID,
              name: list.text,
              amount: list.amount,
              items: items
            };
          });
          
          this.listsSubject.next(transformedLists);
          observer.next();
          observer.complete();
        },
        error: (err) => {
          console.error('Failed to load lists from database:', err);
          // If table doesn't exist, it was already created in Phase 2
          // Just show empty list
          this.listsSubject.next([]);
          observer.error(err);
        }
      });
    });
  }
  
  /**
   * Get current lists (synchronous, returns current value)
   */
  getLists() {
    return this.listsSubject.value;
  }
  
  /**
   * Get lists as observable (for real-time updates)
   */
  getLists$(): Observable<Array<{ id?: number, name: string, amount?: number, items?: string[] }>> {
    return this.listsSubject.asObservable();
  }
  
  /**
   * Add a new list to the database
   */
  addList(list: { name: string }): Observable<any> {
    return new Observable(observer => {
      // Store the full text (e.g., "2 milks") in the text field
      this.dbHandler.addNote(this.currentHouseholdId, list.name).subscribe({
        next: (response) => {
          // Reload lists from database to get the new one with its ID
          this.loadListsFromDatabase().subscribe({
            next: () => {
              observer.next(response);
              observer.complete();
            },
            error: (err) => {
              observer.error(err);
            }
          });
        },
        error: (err) => {
          console.error('Failed to add list:', err);
          observer.error(err);
        }
      });
    });
  }

  /**
   * Update a list name
   */
  updateListName(listId: number, newName: string): Observable<any> {
    return new Observable(observer => {
      this.dbHandler.updateNoteText(this.currentHouseholdId, listId, newName).subscribe({
        next: (response) => {
          this.loadListsFromDatabase().subscribe({
            next: () => {
              observer.next(response);
              observer.complete();
            },
            error: (err) => {
              observer.error(err);
            }
          });
        },
        error: (err) => {
          console.error('Failed to update list:', err);
          observer.error(err);
        }
      });
    });
  }

  /**
   * Add item to a specific list (stored as separate notes in database with parent ID)
   */
  addItemToList(listId: number, itemName: string): Observable<any> {
    return new Observable(observer => {
      // Add the item as a new note entry with the list ID as parent
      this.dbHandler.addNote(this.currentHouseholdId, itemName, 0, listId).subscribe({
        next: (response) => {
          // Reload lists from database to get the new item
          this.loadListsFromDatabase().subscribe({
            next: () => {
              observer.next(response);
              observer.complete();
            },
            error: (err) => {
              observer.error(err);
            }
          });
        },
        error: (err) => {
          console.error('Failed to add item:', err);
          observer.error(err);
        }
      });
    });
  }
  
  /**
   * Refresh lists from database
   */
  refreshLists(): Observable<void> {
    return this.loadListsFromDatabase();
  }

  /**
   * Set the current household ID (for multi-household support)
   */
  setHouseholdId(householdId: number) {
    this.currentHouseholdId = householdId;
    this.loadListsFromDatabase().subscribe();
  }
}
