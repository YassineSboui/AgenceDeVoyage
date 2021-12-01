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
  count: number;
  hotels: Hotel[] = [];
  cityhotels: Hotel[] = [];
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
        this.cityhotels = this.hotels.filter(
          (element) => element.city == this.identifiant
        );
        this.count = this.cityhotels.length;
        return this.cityhotels;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getHotelByName(name: string) {
    this.cityhotels = this.hotels.filter(
      (element) => element.city == this.identifiant
    );
    if (name != '') {
      this.cityhotels = this.cityhotels.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    this.count = this.cityhotels.length;
  }
  getDiscountHotels() {
    this.cityhotels = this.hotels.filter(
      (element) => element.city == this.identifiant
    );

    this.cityhotels = this.cityhotels.filter(
      (element) => element.enpromo == true
    );
    this.count = this.cityhotels.length;
  }
  getNoDiscountHotels() {
    this.cityhotels = this.hotels.filter(
      (element) => element.city == this.identifiant
    );

    this.cityhotels = this.cityhotels.filter(
      (element) => element.enpromo == false
    );
    this.count = this.cityhotels.length;
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
  }
}
