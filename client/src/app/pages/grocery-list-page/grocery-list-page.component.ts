import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';


@Component({
  selector: 'app-grocery-list-page',
  imports: [PageTitleComponent, AddButtonComponent],
  standalone: true,
  templateUrl: './grocery-list-page.component.html',
  styleUrl: './grocery-list-page.component.css'
})
export class GroceryListPageComponent {
onAddClick() {
    console.log('Add button clicked!');
  }
}
