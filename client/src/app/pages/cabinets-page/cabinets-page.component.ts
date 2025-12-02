import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { CabinetNormalComponent } from '../../shared/cabinet-normal/cabinet-normal.component';
import { AddCabinetButtonComponent } from '../../shared/add-cabinet-button/add-cabinet-button.component';
import { FridgeComponent } from '../../shared/fridge/fridge.component';
import { FreezerComponent } from '../../shared/freezer/freezer.component';
import { AddCabinetPopupComponent } from './add-cabinet-popup/add-cabinet-popup.component';
import { CommonModule } from '@angular/common';
import { CabinetService } from '../../services/cabinet.service';

@Component({
  selector: 'app-cabinets-page',
  standalone: true,
  imports: [PageTitleComponent, AddButtonComponent, CabinetNormalComponent, AddCabinetButtonComponent, FridgeComponent, FreezerComponent, CommonModule, AddCabinetPopupComponent],
  templateUrl: './cabinets-page.component.html',
  styleUrl: './cabinets-page.component.css'
})
export class CabinetsPageComponent implements OnInit {
  showAddCabinetPopup = false;
  userCabinets: any[] = []; // Store selected cabinet types

  constructor(private router: Router, private cabinetService: CabinetService) {}

  ngOnInit() {
    this.userCabinets = this.cabinetService.getCabinets();
  }

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onCabinetClick(cabinetIndex: number) {
    this.router.navigate(['/cabinet', cabinetIndex]);
  }

  onAddCabinetClick() {
    this.showAddCabinetPopup = true;
  }

  onPopupClosed() {
    this.showAddCabinetPopup = false;
  }

  onFridgeClick() {
    console.log('Fridge button clicked!');
  }

  onFreezerClick() {
    console.log('Freezer button clicked!');
  }

  onCabinetAdded(index: number, name: string) {
    this.cabinetService.addCabinet({ index, name });
    this.userCabinets = this.cabinetService.getCabinets();
  }
}
