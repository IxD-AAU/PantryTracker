import { Component, Output, EventEmitter } from '@angular/core';
import { TitleBoxComponent } from "../../../../shared/recipe-box/title-box/title-box.component";
import { HhSingleButtonComponent } from "../hh-single-button/hh-single-button.component";

@Component({
  selector: 'app-profile-box',
  standalone: true,
  imports: [TitleBoxComponent, HhSingleButtonComponent],
  templateUrl: './profile-box.component.html',
  styleUrl: './profile-box.component.css',
})
export class ProfileBoxComponent {
  
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
