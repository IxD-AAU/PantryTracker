import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() label: string = 'Indkøbsliste';
  @Output() clicked = new EventEmitter<void>();
  
  lineWidths = ['60%', '95%', '45%', '60%', '70%', '100%', '80%'];

  onClick() {
    this.clicked.emit();
  }
}
