import { Component } from '@angular/core';

@Component({
  selector: 'app-all-recipe-button',
  standalone: true,
  imports: [],
  templateUrl: './all-recipe-button.component.html',
  styleUrl: './all-recipe-button.component.css'
})
export class AllRecipeButtonComponent {

  onAllRecipeClick() {
    console.log('All Recipe button clicked!');
  }
}
