import { PhoneSquareComponent } from './phone-square/phone-square.component';
import { NavBarComponent } from './phone-square/nav-bar/nav-bar.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PresentationComponent } from './shared/for-presentation/for-presentation.component';
import { HomeButComponent } from './phone-square/nav-bar/home-but/home-but.component';
import { CabinetsButComponent } from './phone-square/nav-bar/cabinets-but/cabinets-but.component';
import { GroceryListButComponent } from './phone-square/nav-bar/grocery-list-but/grocery-list-but.component';
import { RecipeButComponent } from './phone-square/nav-bar/recipe-but/recipe-but.component';
import { HouseholdButComponent } from './phone-square/nav-bar/household-but/household-but.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    /*PhoneSquareComponent,
    NavBarComponent,*/
    HomeButComponent,
    CabinetsButComponent,
    GroceryListButComponent,
    RecipeButComponent,
    HouseholdButComponent,
    PresentationComponent,
    HttpClientModule
  ],
  template: `
    <nav>
      <app-home-but routerLink="/home-page"></app-home-but>
      <app-cabinets-but routerLink="/cabinets-page"></app-cabinets-but>
      <app-grocery-list-but routerLink="/grocery-list-page"></app-grocery-list-but>
      <app-recipe-but routerLink="/recipe-page"></app-recipe-but>
      <app-household-but routerLink="/household-page"></app-household-but>
    </nav>
    <app-presentation></app-presentation>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PantryTracker';
}
