import { Component, Input, OnInit } from '@angular/core';
import { Offre } from 'src/app/models/offre';

@Component({
  selector: 'app-offre-card',
  templateUrl: './offre-card.component.html',
  styleUrls: ['./offre-card.component.css'],
})
export class OffreCardComponent implements OnInit {
  @Input() offre: Offre;
  getprice() {
    return Number(this.offre.price) * ((100 - Number(this.offre.promo)) / 100);
  }
  constructor() {}

  ngOnInit(): void {}
}
