import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dentination } from 'src/app/models/dentination';
import { Hotel } from 'src/app/models/hotel';
import { DentinationService } from 'src/app/services/dentination.service';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  identifiant: any;
  destination: Dentination;
  hotels: Hotel[] = [];
  destinationSelect() {
    this.DentinationService.getOneDentination(this.identifiant).subscribe(
      (response) => {
        this.destination = response;
        return this.destination;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getAllhotels() {
    this.hotelsService.getHotels().subscribe(
      (response) => {
        this.hotels = response;
        this.hotels.forEach((element) => {
          element.enpromo = element.promotion != 0;
        });
        return this.hotels;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getcityhotels() {
    return this.hotels.filter(
      (element) => String(element.city) == this.identifiant
    );
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private DentinationService: DentinationService,
    private hotelsService: HotelsService
  ) {}

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.destinationSelect();
    this.getAllhotels();
    this.getcityhotels();
  }
}
