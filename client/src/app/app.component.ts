import { PhoneSquareComponent } from './phone-square/phone-square.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PhoneSquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PantryTracker';
}
