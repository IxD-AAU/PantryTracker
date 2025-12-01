import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-list-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-list-button.component.html',
  styleUrl: './add-list-button.component.css'
})
export class AddListButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
