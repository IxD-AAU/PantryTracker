import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ProfileBoxComponent } from '../../pages/household-page/profile-box/profile-box.component';
import { HouseholdBoxComponent } from '../../shared/household-box/household-box.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-household-page',
  imports: [PageTitleComponent, HouseholdBoxComponent, ProfileBoxComponent/*HhSplitButtonComponent*/, CommonModule],
  standalone: true,
  templateUrl: './household-page.component.html',
  styleUrl: './household-page.component.css'
})
export class HouseholdPageComponent {



}
