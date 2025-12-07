import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cabinet-normal',
  standalone: true,
  imports: [],
  templateUrl: './cabinet-normal.component.html',
  styleUrl: './cabinet-normal.component.css'
})
export class CabinetNormalComponent {
  @Input() label: string = 'Skab';
  @Input() cabinetName: string = 'Cabinet';
  @Input() cabinetIndex: number = 2;  
  @Output() clicked = new EventEmitter<void>();
  @Output() cabinetClicked = new EventEmitter<number>();

  onClick() {
    this.clicked.emit();
    this.cabinetClicked.emit(this.cabinetIndex);
  }
}
