import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { RecommendButtonComponent } from './recommend-button/recommend-button.component';
import { RouterModule } from '@angular/router';
import { AllRecipeButtonComponent } from './all-recipe-button/all-recipe-button.component';
import { FilterRecipeButtonComponent } from './filter-recipe-button/filter-recipe-button.component';

@Component({
  selector: 'app-recipe-page',
  imports: [PageTitleComponent, RecommendButtonComponent,FilterRecipeButtonComponent, AddButtonComponent, AllRecipeButtonComponent, RouterModule],
  standalone: true,
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {
  constructor(private router: Router) {}

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onRecommendClick() {
    console.log('Recommend button clicked!');
  }

  onAllRecipeClick() {
    console.log('All Recipe button clicked!');
  }

  onFilterClick() {
    console.log('Filter Recipe button clicked!');
  }
}
