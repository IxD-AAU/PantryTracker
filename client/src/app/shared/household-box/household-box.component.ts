import { Component, Output, EventEmitter } from '@angular/core';
import { TitleBoxComponent } from "../recipe-box/title-box/title-box.component";
import { HhSplitButtonComponent } from '../../pages/household-page/household-comps/hh-split-button/hh-split-button.component'

@Component({
  selector: 'app-household-box',
  standalone: true,
  imports: [TitleBoxComponent, HhSplitButtonComponent ],
  templateUrl: './household-box.component.html',
  styleUrl: './household-box.component.css'
})
export class HouseholdBoxComponent {
  
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
