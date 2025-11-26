import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accept-button',
  standalone: true,
  imports: [],
  templateUrl: './accept-button.component.html',
  styleUrl: './accept-button.component.css'
})
export class AcceptButtonComponent { 
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
