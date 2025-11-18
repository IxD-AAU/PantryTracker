import { Component } from '@angular/core';
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
 onAddClick() {
    console.log('Add button clicked!');
  }
   onCabinetClick() {
    console.log('Cabinet button clicked!');
  }
}
