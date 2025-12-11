import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '../../../../shared/submit-button/submit-button.component';


@Component({
  selector: 'app-add-household-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, SubmitButtonComponent],
  templateUrl: './add-household-popup.component.html',
  styleUrl: './add-household-popup.component.css'
})
export class AddHouseholdPopupComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() hhAdded = new EventEmitter<string>();
  infoData = '';

  onClose() {
    this.closed.emit();
  }

  onSubmit() {
    const name = this.infoData.trim() || 'Information';
    this.hhAdded.emit(name);
    this.infoData = '';
    this.onClose();
  }
}

