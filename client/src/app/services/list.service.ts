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
    this.loadListsFromDatabase();
  }
  
  /**
   * Load all lists from database
   */
  private loadListsFromDatabase() {
    this.dbHandler.getAllNotes(this.currentHouseholdId).subscribe({
      next: (notes) => {
        const transformedLists = notes.map((note: any) => ({
          id: note.UNID,
          name: note.text,
          amount: note.amount,
          items: [] // Items would be loaded separately or stored differently
        }));
        this.listsSubject.next(transformedLists);
      },
      error: (err) => {
        console.error('Failed to load lists from database:', err);
        // If table doesn't exist, it was already created in Phase 2
        // Just show empty list
        this.listsSubject.next([]);
      }
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
          this.loadListsFromDatabase();
          observer.next(response);
          observer.complete();
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
          this.loadListsFromDatabase();
          observer.next(response);
          observer.complete();
        },
        error: (err) => {
          console.error('Failed to update list:', err);
          observer.error(err);
        }
      });
    });
  }

  /**
   * Add item to a specific list (stored as separate notes in database)
   */
  addItemToList(listName: string): Observable<any> {
    return new Observable(observer => {
      // Add the item as a new note entry (e.g., "2 milks")
      this.dbHandler.addNote(this.currentHouseholdId, listName).subscribe({
        next: (response) => {
          // Reload lists from database to get the new item
          this.loadListsFromDatabase();
          observer.next(response);
          observer.complete();
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
  refreshLists() {
    this.loadListsFromDatabase();
  }

  /**
   * Set the current household ID (for multi-household support)
   */
  setHouseholdId(householdId: number) {
    this.currentHouseholdId = householdId;
    this.loadListsFromDatabase();
  }
}
