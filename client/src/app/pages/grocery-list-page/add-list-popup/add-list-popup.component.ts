import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';

@Component({
  selector: 'app-add-list-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, SubmitButtonComponent],
  templateUrl: './add-list-popup.component.html',
  styleUrl: './add-list-popup.component.css'
})
export class AddListPopupComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() listAdded = new EventEmitter<string>();
  listName = '';

  onClose() {
    this.closed.emit();
  }

  onSubmit() {
    const name = this.listName.trim() || 'Min liste';
    this.listAdded.emit(name);
    this.listName = '';
    this.onClose();
  }
}
