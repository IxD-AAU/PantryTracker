import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { Router } from '@angular/router';
import { AddListButtonComponent } from '../../shared/add-list-button/add-list-button.component';


@Component({
  selector: 'app-grocery-list-page',
  imports: [PageTitleComponent, AddButtonComponent, AddListButtonComponent],
  standalone: true,
  templateUrl: './grocery-list-page.component.html',
  styleUrl: './grocery-list-page.component.css'
})
export class GroceryListPageComponent {
  constructor(private router: Router) {}

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onAddList() {
    // Add your logic here (e.g., navigate or open a popup)
  }
}
