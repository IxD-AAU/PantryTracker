import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhoneSquareComponent } from './phone-square/phone-square.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GroceryListPageComponent } from './pages/grocery-list-page/grocery-list-page.component';
import { CabinetsPageComponent } from './pages/cabinets-page/cabinets-page.component';
import { HouseholdPageComponent } from './pages/household-page/household-page.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { AddItemPageComponent } from './pages/add-item-page/add-item-page.component';
import { CabinetDetailComponent } from './pages/cabinet-detail/cabinet-detail.component';
import { ListDetailComponent } from './pages/list-detail/list-detail.component';

export const appRoutes: Routes = [
  { 
    path: '', 
    component: PhoneSquareComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'grocery-list', component: GroceryListPageComponent },
      { path: 'cabinets', component: CabinetsPageComponent },
      { path: 'household', component: HouseholdPageComponent },
      { path: 'recipe', component: RecipePageComponent },
      { path: 'add-item', component: AddItemPageComponent },
      { path: 'cabinet/:id', component: CabinetDetailComponent },
      { path: 'list/:id', component: ListDetailComponent }
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
