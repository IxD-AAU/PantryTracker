import { Component } from '@angular/core';
import { GroceryListButComponent} from './grocery-list-but/grocery-list-but.component';
import { CabinetsButComponent } from './cabinets-but/cabinets-but.component';
import { HomeButComponent } from './home-but/home-but.component';
import { HouseholdButComponent } from './household-but/household-but.component';
import { RecipeButComponent } from './recipe-but/recipe-but.component';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  imports: [/*GroceryListButComponent, CabinetsButComponent, HomeButComponent, HouseholdButComponent, RecipeButComponent, RouterOutlet,*/ RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/home-page']);
  }

}
