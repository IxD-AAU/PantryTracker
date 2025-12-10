import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabinet-item',
  imports: [CommonModule],
  templateUrl: './cabinet-item.component.html',
  styleUrl: './cabinet-item.component.css'
})
export class CabinetItemComponent implements OnInit{
  @Input() item: any;
  @Input() displayName: any;

  daysUntilExpiration: number | null = null;
  iconSwitchExpression: number = 0;


  constructor(){}

  ngOnInit(): void {

    console.log(this.displayName);

    const todayDate = new Date();
    const itemDate = new Date(this.item.itemExpirationDate);

    const timeDelta = itemDate.getTime() - todayDate.getTime();

    this.daysUntilExpiration = Math.ceil(timeDelta / (1000 * 60 * 60 * 24));
    if (this.daysUntilExpiration < 0){
      this.iconSwitchExpression = 1;
    }
    else if (this.daysUntilExpiration == 0) {
      this.iconSwitchExpression = 2;
    }
    else if (this.daysUntilExpiration >= 2){
      this.iconSwitchExpression = 3;
    }

  }


}
