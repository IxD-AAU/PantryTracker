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

  constructor(private router: Router, private listService: ListService) {}

  ngOnInit() {
    this.userLists = this.listService.getLists();
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

  onListAdded(listName: string) {
    this.listService.addList({ name: listName });
    this.userLists = this.listService.getLists();
    this.showAddListPopup = false;
  }

  onListClick(listIndex: number) {
    this.router.navigate(['/list', listIndex]);
  }
}
