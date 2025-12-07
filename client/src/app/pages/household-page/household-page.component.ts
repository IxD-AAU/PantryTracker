import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';

@Component({
  selector: 'app-household-page',
  imports: [PageTitleComponent],
  standalone: true,
  templateUrl: './household-page.component.html',
  styleUrl: './household-page.component.css'
})
export class HouseholdPageComponent {

}
