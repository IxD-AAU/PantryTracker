import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { Router } from '@angular/router';
import { AddListButtonComponent } from '../../shared/add-list-button/add-list-button.component';
import { AddListPopupComponent } from './add-list-popup/add-list-popup.component';
import { ListComponent } from '../../shared/list/list.component';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-grocery-list-page',
  imports: [CommonModule, PageTitleComponent, AddButtonComponent, AddListButtonComponent, AddListPopupComponent, ListComponent],
  standalone: true,
  templateUrl: './grocery-list-page.component.html',
  styleUrl: './grocery-list-page.component.css'
})
export class GroceryListPageComponent implements OnInit {
  showAddListPopup = false;
  userLists: any[] = [];
  isLoading = true;

  constructor(private router: Router, private listService: ListService) {}

  ngOnInit() {
    // Subscribe to list changes for real-time updates
    this.listService.getLists$().subscribe(lists => {
      this.userLists = lists;
      this.isLoading = false;
      console.log('📋 Lists updated:', lists);
    });
    
    // Trigger initial load
    this.listService.refreshLists();
  }

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onAddList() {
    this.showAddListPopup = true;
  }

  onPopupClosed() {
    this.showAddListPopup = false;
  }

  /**
   * Handle new list creation - saves to database
   */
  onListAdded(listName: string) {
    this.isLoading = true;
    
    this.listService.addList({ name: listName }).subscribe({
      next: (response) => {
        console.log('✅ List created successfully:', response);
        this.showAddListPopup = false;
        // The subscription will automatically update the list
      },
      error: (err) => {
        console.error('❌ Error creating list:', err);
        alert('Failed to create list. Please check the console for details.');
        this.isLoading = false;
      }
    });
  }

  onListClick(listIndex: number) {
    // Use the database ID instead of array index
    const list = this.userLists[listIndex];
    if (list && list.id) {
      this.router.navigate(['/list', list.id]);
    } else {
      // Fallback to index if no ID (shouldn't happen with database)
      this.router.navigate(['/list', listIndex]);
    }
  }
}
