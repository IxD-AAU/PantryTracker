import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  standalone: true,
  templateUrl: './trash-icon.component.html',
  styleUrl: './trash-icon.component.css'
})
export class TrashIconComponent {
  @Output() clicked = new EventEmitter<void>();

  onTrashClick() {
    this.clicked.emit();
  }
}
