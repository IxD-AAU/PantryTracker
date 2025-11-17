import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhoneSquareComponent } from './phone-square/phone-square.component';
import { HomeButComponent } from './phone-square/nav-bar/home-but/home-but.component';
import { GroceryListButComponent } from './phone-square/nav-bar/grocery-list-but/grocery-list-but.component';
import { CabinetsButComponent } from './phone-square/nav-bar/cabinets-but/cabinets-but.component';
import { HouseholdButComponent } from './phone-square/nav-bar/household-but/household-but.component';
import { RecipeButComponent } from './phone-square/nav-bar/recipe-but/recipe-but.component';

export const appRoutes: Routes = [
  { path: '', component: PhoneSquareComponent,
    children: [
  {path: "home-but", redirectTo: "home-page", pathMatch: "full"},
  {path: "grocery-list-but", redirectTo: "grocery-list-page", pathMatch: "full"},
  {path: "cabinets-but", redirectTo: "cabinets-page", pathMatch: "full"}, 
  {path: "household-but", redirectTo: "household-page", pathMatch: "full"}, 
  {path: "recipe-but", redirectTo: "recipe-page", pathMatch: "full"},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
