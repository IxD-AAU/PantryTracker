import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { CabinetNormalComponent } from '../../shared/cabinet-normal/cabinet-normal.component';
import { ListComponent } from '../../shared/list/list.component';
import { RecipeBoxComponent } from '../../shared/recipe-box/recipe-box.component';


@Component({
  selector: 'app-home-page',
  imports: [PageTitleComponent, AddButtonComponent, CabinetNormalComponent, ListComponent, RecipeBoxComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router) {}

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onCabinetClick() {
    console.log('Cabinet button clicked!');
  }

  onListClick() {
    console.log('List button clicked!');
  }

  onRecipeClick() {
    console.log('Recipe box clicked!');
  }
}