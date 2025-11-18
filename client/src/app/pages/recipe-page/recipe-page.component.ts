import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';

@Component({
  selector: 'app-recipe-page',
  imports: [PageTitleComponent, AddButtonComponent],
  standalone: true,
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {
 onAddClick() {
    console.log('Add button clicked!');
  }
}
