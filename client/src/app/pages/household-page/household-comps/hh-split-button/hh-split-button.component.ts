import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hh-split-button',
  standalone: true,
  imports: [],
  templateUrl: './hh-split-button.component.html',
  styleUrl: './hh-split-button.component.css'
})
export class HhSplitButtonComponent {

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
