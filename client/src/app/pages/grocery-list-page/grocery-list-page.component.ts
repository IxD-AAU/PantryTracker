import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { Router } from '@angular/router';
import { AddListButtonComponent } from '../../shared/add-list-button/add-list-button.component';
import { AddListPopupComponent } from './add-list-popup/add-list-popup.component';


@Component({
  selector: 'app-grocery-list-page',
  imports: [CommonModule, PageTitleComponent, AddButtonComponent, AddListButtonComponent, AddListPopupComponent],
  standalone: true,
  templateUrl: './grocery-list-page.component.html',
  styleUrl: './grocery-list-page.component.css'
})
export class GroceryListPageComponent {
  showAddListPopup = false;

  constructor(private router: Router) {}

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onAddList() {
    this.showAddListPopup = true;
  }

  onPopupClosed() {
    this.showAddListPopup = false;
  }

  onListAdded(listName: string) {
    console.log('List added:', listName);
    this.showAddListPopup = false;
  }
}
