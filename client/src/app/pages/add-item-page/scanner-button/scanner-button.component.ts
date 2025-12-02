import { Component, Output, inject, EventEmitter } from '@angular/core';
import { BarcodeScannerService } from '../../../services/scanner.service';  

@Component({
  selector: 'app-scanner-button',
  standalone: true,
  imports: [],
  templateUrl: './scanner-button.component.html',
  styleUrl: './scanner-button.component.css'
})
export class ScannerButtonComponent {
  private readonly scannerService = inject(BarcodeScannerService);
  protected readonly scanResult = this.scannerService.getScanResult();

  async startScanner() {
    await this.scannerService.startScanner();
  }
}