import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home-but',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-but.component.html',
  styleUrls: ['./home-but.component.css']
})
export class HomeButComponent {
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/home-page']);
  }
}



