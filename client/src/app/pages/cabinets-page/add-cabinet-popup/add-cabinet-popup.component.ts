import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FridgeComponent } from '../../../shared/fridge/fridge.component';
import { FreezerComponent } from '../../../shared/freezer/freezer.component';
import { CabinetNormalComponent } from '../../../shared/cabinet-normal/cabinet-normal.component';
import { SubmitButtonComponent } from '../../../shared/submit-button/submit-button.component';

@Component({
  selector: 'app-add-cabinet-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, FridgeComponent, FreezerComponent, CabinetNormalComponent, SubmitButtonComponent],
  templateUrl: './add-cabinet-popup.component.html',
  styleUrl: './add-cabinet-popup.component.css'
})
export class AddCabinetPopupComponent {
  @Output() closed = new EventEmitter<void>();
  @Output() cabinetAdded = new EventEmitter<{index: number, name: string}>();
  cabinetName = '';
  currentCabinetIndex = 0;
  cabinets = [
    { name: 'Fridge', type: 'fridge' },
    { name: 'Freezer', type: 'freezer' },
    { name: 'Cabinet', type: 'cabinet' }
  ];

  onClose() {
    this.closed.emit();
  }

  nextCabinet() {
    this.currentCabinetIndex = (this.currentCabinetIndex + 1) % this.cabinets.length;
  }

  previousCabinet() {
    this.currentCabinetIndex = (this.currentCabinetIndex - 1 + this.cabinets.length) % this.cabinets.length;
  }

  onSubmit() {
    const defaultNames = ['Køleskab', 'Fryser', 'Skab'];
    const cabinetName = this.cabinetName.trim() || defaultNames[this.currentCabinetIndex];
    
    this.cabinetAdded.emit({ index: this.currentCabinetIndex, name: cabinetName });
    this.cabinetName = ''; // Reset input
    this.currentCabinetIndex = 0; // Reset carousel
    this.onClose();
  }
}
