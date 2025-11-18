import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';

@Component({
  selector: 'app-recipe-page',
  imports: [PageTitleComponent],
  standalone: true,
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {

}
