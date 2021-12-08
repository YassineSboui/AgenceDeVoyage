import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-gestiondestination',
  templateUrl: './gestiondestination.component.html',
  styleUrls: ['./gestiondestination.component.css'],
})
export class GestiondestinationComponent implements OnInit {
  destinations: Dentination[] = [];
  Allhotels: Hotel[] = [];
  cityhotels: Hotel[] = [];
  destination: Dentination = new Dentination(' ', ' ', ' ', ' ', 0, 0, 0);
  hotel1: Hotel = new Hotel(' ', ' ', ' ', 0, 0, 0, '', true);

  getcityhotels(city: String) {
    this.hotelsService.getHotels().subscribe(
      (response) => {
        this.Allhotels = response;
        this.Allhotels.forEach((element) => {
          element.enpromo = element.promotion != 0;
        });
        this.cityhotels = this.Allhotels.filter(
          (element) => element.city == city
        );
        return this.cityhotels;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  destinationlist() {
    this.DentinationService.getDentination().subscribe(
      (response) => {
        this.destinations = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  destinationSelect(city: string) {
    this.DentinationService.getOneDentination(city).subscribe(
      (response) => {
        this.destination = response;
        return this.destination;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  hotelSelect(hotel: string) {
    this.hotelsService.getOneHotel(hotel).subscribe(
      (response) => {
        this.hotel1 = response;
        this.hotel1.enpromo = this.hotel1.promotion != 0;
        return this.hotel1;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  destinationDelete(name: string) {
    if (this.cityhotels.length != 0) {
      this.ErrorSnackBar(
        'This Destination have some hotels please remove them before romoving the destination'
      );
    } else {
      this.DentinationService.deleteDentination(name).subscribe(
        (response) => {
          this.SuccessSnackBar('Destination Deleted successfully');
          location.reload();
        },
        (error) => {
          this.ErrorSnackBar('Failed Modification');
        }
      );
    }
  }

  hotelDelete(name: string) {
    this.hotelsService.deleteHotel(name).subscribe(
      (response) => {
        this.SuccessSnackBar('Hotel Deleted successfully');
        location.reload();
      },
      (error) => {
        this.ErrorSnackBar('Failed Modification');
      }
    );
  }

  getcity(city: String) {
    if (city != 'none') {
      this.getcityhotels(city);
    }
  }

  constructor(
    private _snackBar: MatSnackBar,
    private DentinationService: DentinationService,
    private router: Router,
    private hotelsService: HotelsService
  ) {}
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  ngOnInit(): void {
    this.destinationlist();
  }
}
