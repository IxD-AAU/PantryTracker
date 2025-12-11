import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hh-single-button',
  imports: [],
  templateUrl: './hh-single-button.component.html',
  styleUrl: './hh-single-button.component.css'
})
export class HhSingleButtonComponent {

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
