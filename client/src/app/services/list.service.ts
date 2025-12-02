import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listsSubject = new BehaviorSubject<Array<{ name: string }>>([]);
  
  getLists() {
    return this.listsSubject.value;
  }
  
  addList(list: { name: string }) {
    const currentLists = this.listsSubject.value;
    this.listsSubject.next([...currentLists, list]);
  }
}
