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
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
