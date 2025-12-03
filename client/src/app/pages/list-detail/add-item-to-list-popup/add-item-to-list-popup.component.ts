import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';

@Component({
  selector: 'app-add-item-to-list-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, SubmitButtonComponent],
  templateUrl: './add-item-to-list-popup.component.html',
  styleUrl: './add-item-to-list-popup.component.css'
})
export class AddItemToListPopupComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() itemAdded = new EventEmitter<string>();
  itemName = '';

  onClose() {
    this.closed.emit();
  }

  onSubmit() {
    const name = this.itemName.trim();
    if (name) {
      this.itemAdded.emit(name);
      this.itemName = '';
      this.onClose();
    }
  }
}
