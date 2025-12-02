import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend-button',
  standalone: true,
  imports: [],
  templateUrl: './recommend-button.component.html',
  styleUrl: './recommend-button.component.css'
})
export class RecommendButtonComponent {

  onRecommendClick() {
    console.log('Recommend button clicked!');
}}
