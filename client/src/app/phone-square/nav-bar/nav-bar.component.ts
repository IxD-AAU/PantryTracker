import { Component, OnDestroy, OnInit, output, Output } from '@angular/core';
import { GroceryListButComponent} from './grocery-list-but/grocery-list-but.component';
import { CabinetsButComponent } from './cabinets-but/cabinets-but.component';
import { HomeButComponent } from './home-but/home-but.component';
import { HouseholdButComponent } from './household-but/household-but.component';
import { RecipeButComponent } from './recipe-but/recipe-but.component';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { resolve } from 'path';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-nav-bar',
  imports: [/*GroceryListButComponent, CabinetsButComponent, HomeButComponent, HouseholdButComponent, RecipeButComponent, RouterOutlet*/ RouterLink, RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy{
  isActive: boolean = false;
  Page: string = "";
  private routerSubscription: Subscription = new Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.Page = this.router.url;
        this.isActive = this.Page !== '/'; // Set isActive to false only for the root route
      }
    });

    this.Page = this.router.url;
    this.isActive = this.Page !=='/';
  }
  ngOnDestroy(): void {
    // Unsubscribe from the router events to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }



  goHome(): void {
    this.router.navigate(['/home-page']);
  }



}
