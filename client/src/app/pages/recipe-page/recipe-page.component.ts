import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { RecommendButtonComponent } from './recommend-button/recommend-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  imports: [PageTitleComponent, RecommendButtonComponent, AddButtonComponent],
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
}
