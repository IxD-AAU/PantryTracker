import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';

@Component({
  selector: 'app-home-page',
  imports: [PageTitleComponent, AddButtonComponent],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  onAddClick() {
    console.log('Add button clicked!');
  }
}
