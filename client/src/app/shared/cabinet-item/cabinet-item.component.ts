import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet-item',
  imports: [],
  templateUrl: './cabinet-item.component.html',
  styleUrl: './cabinet-item.component.css'
})
export class CabinetItemComponent implements OnInit{
  @Input() item: any;
  @Input() displayName: any;


  daysUntilExpiration: number | null = null;

  constructor(){}

  ngOnInit(): void {
    const todayDate = new Date();
    const itemDate = new Date(this.item.itemExpirationDate);

    const timeDelta = itemDate.getTime() - todayDate.getTime();

    this.daysUntilExpiration = Math.ceil(timeDelta / (1000 * 60 * 60 * 24));
  }

}
