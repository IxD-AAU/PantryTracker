import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-to-list-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-list-button.component.html',
  styleUrl: './add-to-list-button.component.css'
})
export class AddToListButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
