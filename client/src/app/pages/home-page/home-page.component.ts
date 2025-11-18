import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';

@Component({
  selector: 'app-home-page',
  imports: [PageTitleComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
