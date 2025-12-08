import { Component, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmallGreenLineComponent } from '../../../../shared/small-green-line/small-green-line.component';
import { ChangeAmountComponent } from '../../../../shared/change-amount/change-amount.component';

@Component({
  selector: 'app-add-item-popup-m',
  standalone: true,
  imports: [CommonModule, FormsModule, SmallGreenLineComponent, ChangeAmountComponent],
  templateUrl: './add-item-popup-m.component.html',
  styleUrls: ['./add-item-popup-m.component.css']
})

export class AddItemPopupMComponent {
  @ViewChild(ChangeAmountComponent) changeAmountComponent!: ChangeAmountComponent;

  @Output() closed = new EventEmitter<void>();
  @Input() itemName: string = '';
  @Output() itemNameChange = new EventEmitter<string>();
  @Output() itemSubmitted = new EventEmitter<{ name: string; amount: number; expirationDate: string }>();

  expirationDate: string = '';
  amount: number = 1;

  onClose() {
    this.closed.emit();
  }

  onItemNameChange(value: string) {
    this.itemNameChange.emit(value);
  }

  formatDate(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '.' + value.slice(2);
      if (value.length >= 5) {
        value = value.slice(0, 5) + '.' + value.slice(5, 7);
      }
    }
    this.expirationDate = value;
    event.target.value = value;
  }

  onSubmit() {
    const amountComponent = this.changeAmountComponent?.amount || 1;
    if (this.itemName.trim() && this.expirationDate.trim()) {
      this.itemSubmitted.emit({
        name: this.itemName,
        amount: amountComponent,
        expirationDate: this.expirationDate
      });
      this.itemName = '';
      this.expirationDate = '';
      this.amount = 1;
      this.onClose();
    }
  }
}
