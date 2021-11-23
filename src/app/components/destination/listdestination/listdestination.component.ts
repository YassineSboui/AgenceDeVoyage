import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';

@Component({
  selector: 'app-listdestination',
  templateUrl: './listdestination.component.html',
  styleUrls: ['./listdestination.component.css'],
})
export class ListdestinationComponent implements OnInit {
  destinations: Dentination[] = [];
  alldestinations :Dentination[] = [];
  count: number ;
   destinationlist() {
    this.dentinationService.getDentination().subscribe(
      (response) => {
        this.destinations = response;
        this.alldestinations = response;
        this.count =this.alldestinations.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getDestinationByName(name: string) {
    this.destinations = this.alldestinations;
    if (name != '') {
      this.destinations = this.destinations.filter(
        (element) => element.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    this.count =this.destinations.length;
  }
  PrixCroissantDestination() {
    this.destinations = this.alldestinations;
    this.count =this.destinations.length;
    this.destinations = this.destinations.sort(function (a, b) {
      return a.price - b.price;
    });
    
  }
  PrixDecroissantDestination() {
    this.destinations = this.alldestinations;
    this.count =this.destinations.length;
    this.destinations = this.destinations.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  constructor(private dentinationService: DentinationService) {}

  ngOnInit(): void {
    this.destinationlist();
  }
}
