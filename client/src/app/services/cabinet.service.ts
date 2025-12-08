import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatabaseHandlerService } from '../database-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  private cabinetsSubject = new BehaviorSubject<Array<{ id?: number, name: string, type: number }>>([]);
  private currentHouseholdId: number = 1; // UHID for TestHousehold

  constructor(private dbHandler: DatabaseHandlerService, private http: HttpClient) {
    this.loadCabinetsFromDatabase().subscribe();
  }

  /**
   * Load all cabinets from database and update the subject
   * Returns an observable that completes when the load is done
   */
  private loadCabinetsFromDatabase(): Observable<void> {
    return new Observable(observer => {
      this.dbHandler.getAllCabinets(this.currentHouseholdId).subscribe({
        next: (cabinets) => {
          // Transform database format to frontend format
          const transformedCabinets = cabinets.map((cabinet: any) => ({
            id: cabinet.HCIID,
            name: cabinet.displayName,
            type: parseInt(cabinet.cabinetType) // Convert string "0", "1", "2" to number
          }));
          
          this.cabinetsSubject.next(transformedCabinets);
          observer.next();
          observer.complete();
        },
        error: (err) => {
          console.error('Failed to load cabinets from database:', err);
          
          // If table doesn't exist, create it
          if (err.status === 500) {
            console.log('🔧 Creating household cabinet index table...');
            this.dbHandler.createHouseholdCabinetIndex(this.currentHouseholdId).subscribe({
              next: () => {
                console.log('✅ Household cabinet index table created successfully');
                // Show empty list after creating table
                this.cabinetsSubject.next([]);
                observer.next();
                observer.complete();
              },
              error: (createErr) => {
                console.error('Failed to create household cabinet index table:', createErr);
                // Still show empty list even if creation fails (table might already exist)
                this.cabinetsSubject.next([]);
                observer.error(createErr);
              }
            });
          } else {
            // Show empty list on other errors
            this.cabinetsSubject.next([]);
            observer.error(err);
          }
        }
      });
    });
  }

  /**
   * Get current cabinets (synchronous, returns current value)
   */
  getCabinets() {
    return this.cabinetsSubject.value;
  }

  /**
   * Get cabinets as observable (for real-time updates)
   */
  getCabinets$(): Observable<Array<{ id?: number, name: string, type: number }>> {
    return this.cabinetsSubject.asObservable();
  }

  /**
   * Add a new cabinet to the database
   * @param cabinet - Cabinet object with name and type (0=fridge, 1=freezer, 2=cabinet)
   */
  addCabinet(cabinet: { name: string, type: number }): Observable<any> {
    return new Observable(observer => {
      this.dbHandler.addCabinet(this.currentHouseholdId, cabinet.name, cabinet.type).subscribe({
        next: (response) => {
          console.log('✅ Cabinet created successfully:', response);
          // Reload cabinets from database to get the new one with its ID
          this.loadCabinetsFromDatabase().subscribe({
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
          console.error('Failed to add cabinet:', err);
          observer.error(err);
        }
      });
    });
  }

  /**
   * Refresh cabinets from database (manual trigger)
   */
  refreshCabinets() {
    this.loadCabinetsFromDatabase().subscribe();
  }

  /**
   * Update a cabinet name
   */
  updateCabinetName(cabinetId: number, newName: string): Observable<any> {
    return new Observable(observer => {
      this.dbHandler.updateCabinetName(this.currentHouseholdId, cabinetId, newName).subscribe({
        next: (response) => {
          this.loadCabinetsFromDatabase().subscribe({
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
          console.error('Failed to update cabinet:', err);
          observer.error(err);
        }
      });
    });
  }
}
