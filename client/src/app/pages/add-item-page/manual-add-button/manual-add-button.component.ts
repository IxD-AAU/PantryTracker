import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manual-add-button',
  imports: [],
  templateUrl: './manual-add-button.component.html',
  styleUrl: './manual-add-button.component.css'
})
export class ManualAddButtonComponent {
@Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  } 
}
