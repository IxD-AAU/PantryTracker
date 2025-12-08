import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { AddToListButtonComponent } from '../../shared/add-to-list-button/add-to-list-button.component';
import { ListService } from '../../services/list.service';
import { AddItemToListPopupComponent } from './add-item-to-list-popup/add-item-to-list-popup.component';
import { ListItemDividerComponent } from '../../shared/list-item-divider/list-item-divider.component';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, AddButtonComponent, AddToListButtonComponent, AddItemToListPopupComponent, ListItemDividerComponent],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {
  listName: string = '';
  listId: number = 0;
  listIndex: number = 0;
  showAddItemPopup: boolean = false;
  items: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listId = +params['id']; // This is now the database ID
      const lists = this.listService.getLists();
      
      // Find the list by database ID instead of array index
      const listIndex = lists.findIndex(list => list.id === this.listId);
      
      if (listIndex !== -1) {
        this.listIndex = listIndex;
        this.listName = lists[listIndex].name;
        this.items = lists[listIndex].items || [];
        
        // Log the amount from database for debugging
        console.log(`📦 List ${this.listId} has ${lists[listIndex].amount || 0} items in database`);
      } else {
        // List not found, maybe redirect back to grocery-list page
        console.error(`List with ID ${this.listId} not found`);
        this.listName = 'Liste ikke fundet';
      }
    });
  }

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onAddToListClick() {
    this.showAddItemPopup = true;
  }

  onPopupClosed() {
    this.showAddItemPopup = false;
  }

  onItemAdded(itemName: string) {
    // Add item to database as a new note entry with the list ID as parent
    this.listService.addItemToList(this.listId, itemName).subscribe({
      next: () => {
        console.log(`✅ Added item: ${itemName}`);
        // Reload the current lists (data is already loaded at this point)
        this.refreshList();
      },
      error: (err) => {
        console.error('Failed to add item:', err);
      }
    });
  }
  
  refreshList() {
    // Refresh lists from service and update local view
    const lists = this.listService.getLists();
    const listIndex = lists.findIndex(list => list.id === this.listId);
    if (listIndex !== -1) {
      this.items = lists[listIndex].items || [];
    }
  }
}
