import { Component, Output, EventEmitter, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-cabinet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-cabinet.component.html',
  styleUrl: './choose-cabinet.component.css'
})
export class ChooseCabinetComponent {
  @Input() cabinets: string[] = [];
  @Output() cabinetSelected = new EventEmitter<string>();

  isOpen = false;
  selectedcabinet = "Vælg skab";

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectCabinet(cabinet: string) {
    this.selectedcabinet = cabinet;
    this.cabinetSelected.emit(cabinet);
    this.isOpen = false;
  }
}
