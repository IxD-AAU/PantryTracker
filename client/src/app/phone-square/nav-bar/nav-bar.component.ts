import { Component } from '@angular/core';
import { GroceryListButComponent} from './grocery-list-but/grocery-list-but.component';
import { CabinetsButComponent } from './cabinets-but/cabinets-but.component';
import { HomeButComponent } from './home-but/home-but.component';
import { HouseholdButComponent } from './household-but/household-but.component';
import { RecipeButComponent } from './recipe-but/recipe-but.component';



@Component({
  selector: 'app-nav-bar',
  imports: [GroceryListButComponent, CabinetsButComponent, HomeButComponent, HouseholdButComponent, RecipeButComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
