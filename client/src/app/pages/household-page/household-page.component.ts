import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ProfileBoxComponent } from './household-comps/profile-box/profile-box.component';
import { HouseholdBoxComponent } from '../../shared/household-box/household-box.component';
import { AddHouseholdPopupComponent } from './household-comps/add-household-popup/add-household-popup.component';
import { CommonModule } from '@angular/common';
//import { HHservice} from '../../services/hh.service';


@Component({
  selector: 'app-household-page',
  imports: [PageTitleComponent, HouseholdBoxComponent, ProfileBoxComponent, AddHouseholdPopupComponent, CommonModule],
  standalone: true,
  templateUrl: './household-page.component.html',
  styleUrl: './household-page.component.css'
})
export class HouseholdPageComponent {
  HHpopupVisible = false;

  constructor(private router: Router /*, private HHService: HHService*/) {}

  onHHadd(){
    this.HHpopupVisible = true;
  }
  
  HHpopupX(){
    this.HHpopupVisible= false;
  }

}
