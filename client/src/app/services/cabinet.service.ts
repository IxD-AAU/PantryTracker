import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
  private cabinetsSubject = new BehaviorSubject<any[]>([]);
  public cabinets$ = this.cabinetsSubject.asObservable();

  getCabinets() {
    return this.cabinetsSubject.value;
  }

  addCabinet(cabinet: any) {
    const currentCabinets = this.cabinetsSubject.value;
    this.cabinetsSubject.next([...currentCabinets, cabinet]);
  }

  setCabinets(cabinets: any[]) {
    this.cabinetsSubject.next(cabinets);
  }
}
