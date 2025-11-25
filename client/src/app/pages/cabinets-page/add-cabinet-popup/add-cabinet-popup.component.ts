import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-cabinet-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-cabinet-popup.component.html',
  styleUrl: './add-cabinet-popup.component.css'
})
export class AddCabinetPopupComponent {
  @Output() closed = new EventEmitter<void>();
  cabinetName = '';

  onClose() {
    this.closed.emit();
  }
}
