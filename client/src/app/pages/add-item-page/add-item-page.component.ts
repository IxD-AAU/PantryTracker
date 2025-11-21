import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { ScannerButtonComponent } from './scanner-button/scanner-button.component';

@Component({
  selector: 'app-add-item-page',
  standalone: true,
  imports: [PageTitleComponent, ScannerButtonComponent, RouterModule],
  templateUrl: './add-item-page.component.html',
  styleUrl: './add-item-page.component.css'
})
export class AddItemPageComponent {
}
