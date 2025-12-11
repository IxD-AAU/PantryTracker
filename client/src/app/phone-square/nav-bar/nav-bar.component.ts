import { Component, OnInit, output, Output } from '@angular/core';
import { GroceryListButComponent} from './grocery-list-but/grocery-list-but.component';
import { CabinetsButComponent } from './cabinets-but/cabinets-but.component';
import { HomeButComponent } from './home-but/home-but.component';
import { HouseholdButComponent } from './household-but/household-but.component';
import { RecipeButComponent } from './recipe-but/recipe-but.component';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-nav-bar',
  imports: [/*GroceryListButComponent, CabinetsButComponent, HomeButComponent, HouseholdButComponent, RecipeButComponent, RouterOutlet*/ RouterLink, RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  isActive: boolean = true;
  Page: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.Page = this.router.url;
    if (this.Page == "/"){
      this.isActive = false;
    } else { this.isActive = true};
  }

  ngOnLoad(): void{
    this.Page = this.router.url;
    if (this.Page == "/"){
      this.isActive = false;
    } else { this.isActive = true};
  }


  goHome(): void {
    this.router.navigate(['/home-page']);
  }



}
