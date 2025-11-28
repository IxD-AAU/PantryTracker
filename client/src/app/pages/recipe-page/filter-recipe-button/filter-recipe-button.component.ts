import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-recipe-button',
  standalone: true,
  imports: [],
  templateUrl: './filter-recipe-button.component.html',
  styleUrl: './filter-recipe-button.component.css'
})
export class FilterRecipeButtonComponent {

  onFilterClick() {
    console.log('Filter Recipe button clicked!');
  }
}
