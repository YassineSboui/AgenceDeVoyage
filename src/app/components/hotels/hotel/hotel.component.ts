import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  @Input() hotel: Hotel;

  getpromoprice(price: number, promo: number) {
    return (
      price * ((100 - promo) / 100) - ((price * ((100 - promo) / 100)) % 1)
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
