import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  allCards: Card[] = [
    new Card(
      'Trust & Safety',
      'Concerned about your safety? So are we. That’s why we take every measure we can to build safety into each aspect of your trip, no matter where in the world you are.',
      'assets/Accueill/Cards/trust-and-safety.png'
    ),
    new Card(
      'Best Destinations',
      'Perspective on the world. One can find an assortment of wonderful historical sites and beautiful scenery such as beaches‚ mountains. If those attractions appeal to you‚ then the US would be perfect travel destinations.',
      'assets/Accueill/Cards/best-destination.png'
    ),
    new Card(
      'Best Price',
      'If you care about your wallet, Tell us your plans and we’ll find the best room for you, Book now and save on our value added offers',
      'assets/Accueill/Cards/best-price.png'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
