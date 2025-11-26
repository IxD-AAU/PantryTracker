import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { ScannerButtonComponent } from './scanner-button/scanner-button.component';
import { ManualAddButtonComponent } from './manual-add-button/manual-add-button.component';
import { AIPLineComponent } from './aip-line/aip-line.component';
import { AcceptButtonComponent } from './accept-button/accept-button.component';
import { AddItemPopupMComponent } from './manual-add-button/add-item-popup-m/add-item-popup-m.component';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-page',
  standalone: true,
  imports: [PageTitleComponent, ScannerButtonComponent, ManualAddButtonComponent, AIPLineComponent, AcceptButtonComponent, AddItemPopupMComponent, CommonModule, RouterModule],
  templateUrl: './add-item-page.component.html',
  styleUrl: './add-item-page.component.css'
})
export class AddItemPageComponent {
    showAddItemPopupM = false;

  constructor(private router: Router) {}

  onScannerClick() {
    console.log('Scanner button clicked!');
  }

  onAcceptClick() {
    console.log('Accept button clicked!');
  }

  onManualAddClick() {
    console.log('Manual Add button clicked!');
  }

  onManualAddClicked() {
    this.showAddItemPopupM = true;
  }
  
  onPopupClosed() {
    this.showAddItemPopupM = false;
  }

}


