import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-change-amount',
  standalone: true,
  imports: [],
  templateUrl: './change-amount.component.html',
  styleUrls: ['./change-amount.component.css']
})

export class ChangeAmountComponent {
  @Input() amount: number = 1;

  increase() {
    this.amount++;
  }

  decrease() {
    if (this.amount > 1) {
      this.amount--;
    }
  }
}
