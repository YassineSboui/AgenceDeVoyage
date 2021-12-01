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
  table(int: number) {
    var nb = int - (int % 1);
    var table: number[];
    table = Array(nb).fill(4);
    return table;
  }
  table1(int: number) {
    var nb = int - (int % 1);
    var table: number[];
    table = Array(5-nb).fill(4);
    return table;
  }
  constructor() {}

  ngOnInit(): void {}
}
