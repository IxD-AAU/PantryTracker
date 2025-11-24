import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-cabinet-button',
  standalone: true,
  imports: [],
  templateUrl: './add-cabinet-button.component.html',
  styleUrl: './add-cabinet-button.component.css'
})
export class AddCabinetButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
