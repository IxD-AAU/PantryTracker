import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatabaseHandlerService } from '../database-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listsSubject = new BehaviorSubject<Array<{ id?: number, name: string, amount?: number, items?: string[] }>>([]);
  private currentHouseholdId: number = 1; // UHID for TestHousehold
  private apiUrl = 'http://localhost:3000/api/data';
  
  constructor(private dbHandler: DatabaseHandlerService, private http: HttpClient) {
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
   * Delete an item from a list
   */
  deleteItemFromList(listId: number, itemName: string): Observable<any> {
    return new Observable(observer => {
      // First, we need to find the UNID of the item
      // Since items are stored as notes with parentId = listId and text = itemName
      this.dbHandler.getAllNotes(this.currentHouseholdId).subscribe({
        next: (notes) => {
          // Find the item to delete
          const itemToDelete = notes.find((note: any) => 
            note.parentId === listId && note.text === itemName
          );

          if (itemToDelete) {
            // Delete by UNID
            const deleteRequest = {
              UHID: this.currentHouseholdId,
              UNID: itemToDelete.UNID
            };

            this.http.delete(`${this.apiUrl}/delete/note`, { body: deleteRequest }).subscribe({
              next: (response) => {
                // Reload lists from database
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
                console.error('Failed to delete item:', err);
                observer.error(err);
              }
            });
          } else {
            observer.error(new Error('Item not found'));
          }
        },
        error: (err) => {
          console.error('Failed to find item:', err);
          observer.error(err);
        }
      });
    });
  }

  /**
   * Delete an entire list and all its items
   */
  deleteList(listId: number): Observable<any> {
    return new Observable(observer => {
      // Get all notes to find the list and its items
      this.dbHandler.getAllNotes(this.currentHouseholdId).subscribe({
        next: (notes) => {
          // Find all items to delete: the list itself and all items with parentId = listId
          const notesToDelete = notes.filter((note: any) => 
            note.UNID === listId || note.parentId === listId
          );

          if (notesToDelete.length === 0) {
            observer.error(new Error('List not found'));
            return;
          }

          // Delete each note
          let deletedCount = 0;
          notesToDelete.forEach((note: any) => {
            const deleteRequest = {
              UHID: this.currentHouseholdId,
              UNID: note.UNID
            };

            this.http.delete(`${this.apiUrl}/delete/note`, { body: deleteRequest }).subscribe({
              next: () => {
                deletedCount++;
                // Once all items are deleted, reload and complete
                if (deletedCount === notesToDelete.length) {
                  this.loadListsFromDatabase().subscribe({
                    next: () => {
                      observer.next({ success: true });
                      observer.complete();
                    },
                    error: (err) => {
                      observer.error(err);
                    }
                  });
                }
              },
              error: (err) => {
                console.error('Failed to delete list item:', err);
                observer.error(err);
              }
            });
          });
        },
        error: (err) => {
          console.error('Failed to find list:', err);
          observer.error(err);
        }
      });
    });
  }

  /**
   * Set the current household ID (for multi-household support)
   */
  setHouseholdId(householdId: number) {
    this.currentHouseholdId = householdId;
    this.loadListsFromDatabase().subscribe();
  }
}
