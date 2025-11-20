import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { CabinetNormalComponent } from '../../shared/cabinet-normal/cabinet-normal.component';

@Component({
  selector: 'app-cabinets-page',
  standalone: true,
  imports: [PageTitleComponent, AddButtonComponent, CabinetNormalComponent],
  templateUrl: './cabinets-page.component.html',
  styleUrl: './cabinets-page.component.css'
})
export class CabinetsPageComponent {
  constructor(private router: Router) {}

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onCabinetClick() {
    console.log('Cabinet button clicked!');
  }
}
