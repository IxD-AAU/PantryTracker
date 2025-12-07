import { Component, Output, EventEmitter } from '@angular/core';
import { TitleBoxComponent } from './title-box/title-box.component';

@Component({
  selector: 'app-recipe-box',
  standalone: true,
  imports: [TitleBoxComponent],
  templateUrl: './recipe-box.component.html',
  styleUrl: './recipe-box.component.css'
})
export class RecipeBoxComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
