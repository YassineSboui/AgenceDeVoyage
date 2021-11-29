import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() hotel: Hotel;
  constructor() {}

  ngOnInit(): void {}
}
