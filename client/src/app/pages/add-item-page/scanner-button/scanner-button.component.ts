import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scanner-button',
  standalone: true,
  imports: [],
  templateUrl: './scanner-button.component.html',
  styleUrl: './scanner-button.component.css'
})
export class ScannerButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
