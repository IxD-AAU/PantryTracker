import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';

@Component({
  selector: 'app-grocery-list-page',
  imports: [PageTitleComponent],
  standalone: true,
  templateUrl: './grocery-list-page.component.html',
  styleUrl: './grocery-list-page.component.css'
})
export class GroceryListPageComponent {

}
