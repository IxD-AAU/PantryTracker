import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { ScannerButtonComponent } from './scanner-button/scanner-button.component';
import { ManualAddButtonComponent } from './manual-add-button/manual-add-button.component';
import { AIPLineComponent } from './aip-line/aip-line.component';
import { AcceptButtonComponent } from './accept-button/accept-button.component';

@Component({
  selector: 'app-add-item-page',
  standalone: true,
  imports: [PageTitleComponent, ScannerButtonComponent, ManualAddButtonComponent, AIPLineComponent, AcceptButtonComponent, RouterModule],
  templateUrl: './add-item-page.component.html',
  styleUrl: './add-item-page.component.css'
})
export class AddItemPageComponent {
  onScannerClick() {
    console.log('Scanner button clicked!');
  }
}
