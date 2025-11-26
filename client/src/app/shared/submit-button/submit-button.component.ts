import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
