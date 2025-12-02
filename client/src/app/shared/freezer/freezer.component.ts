import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-freezer',
  standalone: true,
  imports: [],
  templateUrl: './freezer.component.html',
  styleUrl: './freezer.component.css'
})
export class FreezerComponent {
  @Input() label: string = 'Fryser';
  @Input() cabinetName: string = 'Freezer';
  @Input() cabinetIndex: number = 1;  
  @Output() clicked = new EventEmitter<void>();
  @Output() cabinetClicked = new EventEmitter<number>();  

  onClick() {
    this.clicked.emit();
    this.cabinetClicked.emit(this.cabinetIndex);
  }
}
