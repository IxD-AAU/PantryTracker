import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmallGreenLineComponent } from '../../../../shared/small-green-line/small-green-line.component';

@Component({
  selector: 'app-add-item-popup-m',
  standalone: true,
  imports: [CommonModule, FormsModule, SmallGreenLineComponent],
  templateUrl: './add-item-popup-m.component.html',
  styleUrl: './add-item-popup-m.component.css'
})

export class AddItemPopupMComponent {
  @Output() closed = new EventEmitter<void>();
  onClose() {
    this.closed.emit();
  }

  @Input() itemName: string = '';
  @Output() itemNameChange = new EventEmitter<string>();

  onItemNameChange(value: string) {
    this.itemNameChange.emit(value);
  }
}
