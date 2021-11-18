import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
 
  allCards: Card[] = [
    new Card('Trust & Safety','Some quick example text to build on the card title and make up the bulk of the card content.','assets/Accueill/Cards/trust-and-safety.png',),
    new Card('Best Destinations',  'Some quick example text to build on the card title and make up the bulk of the card content.','assets/Accueill/Cards/best-destination.png'),
    new Card('Best Price', 'Some quick example text to build on the card title and make up the bul kof the card content.', 'assets/Accueill/Cards/best-price.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
