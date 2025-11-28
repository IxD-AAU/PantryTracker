import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.css'
})
export class FridgeComponent {
  @Input() label: string = 'Køleskab';
  @Input() cabinetName: string = 'Fridge';
  @Input() cabinetIndex: number = 0;  
  @Output() clicked = new EventEmitter<void>();
  @Output() cabinetClicked = new EventEmitter<number>();  

  onClick() {
    this.clicked.emit();
    this.cabinetClicked.emit(this.cabinetIndex); 
  }
}
