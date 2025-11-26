import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-item-popup-m',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-item-popup-m.component.html',
  styleUrl: './add-item-popup-m.component.css'
})

export class AddItemPopupMComponent {
  @Output() closed = new EventEmitter<void>();
  onClose() {
    this.closed.emit();
  }
}
