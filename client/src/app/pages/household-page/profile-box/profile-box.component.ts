import { Component, Output, EventEmitter } from '@angular/core';
import { TitleBoxComponent } from "../../../shared/recipe-box/title-box/title-box.component";

@Component({
  selector: 'app-profile-box',
  standalone: true,
  imports: [TitleBoxComponent],
  templateUrl: './profile-box.component.html',
  styleUrl: './profile-box.component.css',
})
export class ProfileBoxComponent {
  
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
