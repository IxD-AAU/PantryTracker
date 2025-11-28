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
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
