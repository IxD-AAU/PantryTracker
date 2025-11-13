import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeButComponent } from './phone-square/nav-bar/home-but/home-but.component';
import { GroceryListButComponent } from './phone-square/nav-bar/grocery-list-but/grocery-list-but.component';
import { CabinetsButComponent } from './phone-square/nav-bar/cabinets-but/cabinets-but.component';
import { HouseholdButComponent } from './phone-square/nav-bar/household-but/household-but.component';
import { RecipeButComponent } from './phone-square/nav-bar/recipe-but/recipe-but.component';
import path from 'path';

export const appRoutes: Routes = [
  { path: "home-page", component: HomeButComponent },
  { path: "grocery-list-page", component: GroceryListButComponent },
  { path: "cabinets-page", component: CabinetsButComponent },
  { path: "household-page", component: HouseholdButComponent },
  { path: "recipe-page", component: RecipeButComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
