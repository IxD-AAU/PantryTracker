import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-box',
  standalone: true,
  imports: [],
  templateUrl: './recipe-box.component.html',
  styleUrl: './recipe-box.component.css'
})
export class RecipeBoxComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
