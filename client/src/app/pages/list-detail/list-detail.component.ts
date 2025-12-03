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
      this.listIndex = +params['id'];
      const lists = this.listService.getLists();
      if (lists[this.listIndex]) {
        this.listName = lists[this.listIndex].name;
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
    this.items.push(itemName);
    this.showAddItemPopup = false;
  }
}
