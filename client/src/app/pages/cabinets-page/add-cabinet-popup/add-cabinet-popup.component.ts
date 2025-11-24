import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-cabinet-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-cabinet-popup.component.html',
  styleUrl: './add-cabinet-popup.component.css'
})
export class AddCabinetPopupComponent {
  @Output() closed = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }
}
