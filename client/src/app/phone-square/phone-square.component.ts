import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-phone-square',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './phone-square.component.html',
  styleUrls: ['./phone-square.component.css']
})
export class PhoneSquareComponent {

}
