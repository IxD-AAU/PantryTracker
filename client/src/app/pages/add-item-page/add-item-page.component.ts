import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { ScannerButtonComponent } from './scanner-button/scanner-button.component';
import { ManualAddButtonComponent } from './manual-add-button/manual-add-button.component';
import { AIPLineComponent } from './aip-line/aip-line.component';
import { AcceptButtonComponent } from './accept-button/accept-button.component';
import { AddItemPopupMComponent } from './manual-add-button/add-item-popup-m/add-item-popup-m.component';
import { CommonModule, Location } from '@angular/common'; 
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangeAmountComponent } from '../../shared/change-amount/change-amount.component';
import { SmallGreenLineComponent } from '../../shared/small-green-line/small-green-line.component';
import { CabinetService } from '../../services/cabinet.service';

@Component({
  selector: 'app-add-item-page',
  standalone: true,
  imports: [PageTitleComponent, 
    ScannerButtonComponent, 
    ManualAddButtonComponent, 
    AIPLineComponent, 
    AcceptButtonComponent, 
    AddItemPopupMComponent, 
    ChangeAmountComponent,
    SmallGreenLineComponent,
    CommonModule, RouterModule, FormsModule],
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent implements OnInit {
    itemName = '';
    showAddItemPopupM = false;
    addedItems: { name: string; amount: number; expirationDate: string; cabinet: string }[] = [];
    selectedItemIndex: number | null = null;
    cabinets: string[] = [];
  
    constructor(
      private router: Router, 
      private cabinetService: CabinetService,
      private location: Location
    ) { }

    ngOnInit() {
      this.loadCabinets();
    }

  loadCabinets() {
    const allCabinets = this.cabinetService.getCabinets();
    this.cabinets = allCabinets.map(c => c.name);
    console.log('Loaded cabinets:', this.cabinets);
  }

  onBackClicked() {
    this.location.back();
  }

  onItemClick(index: number) {
    this.selectedItemIndex = index;
  }

  onScannerClicked() {
    console.log('Scanner button clicked!');
  }

  onAcceptClicked() {
    console.log('Accept button clicked!');
    this.addedItems.forEach(item => {
      console.log(`Adding ${item.name} to ${item.cabinet}`);
    });
    this.router.navigate(['/cabinets']);
  }

  onManualAddClicked() {
    this.loadCabinets();
    this.showAddItemPopupM = true;
  }
  
  onItemSubmitted(item: { name: string; amount: number; expirationDate: string; cabinet: string }) {
    this.addedItems.push(item);
    console.log('Item submitted:', item);
    console.log('All added items:', this.addedItems);
  }

  onPopupClosed() {
    this.showAddItemPopupM = false;
  }

}


