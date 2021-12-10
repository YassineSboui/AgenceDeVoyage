import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrls: ['./updatehotel.component.css'],
})
export class UpdatehotelComponent implements OnInit {
  cityhotels: Hotel;
  enpromo: boolean = false;
  @Input() hotel: Hotel;

  UpdateHotel(
    name: string,
    description: string,
    image: string,
    rating: string,
    nightprice: string,
    promotion: string,
    enpromo: boolean
  ) {
    if (
      name == '' ||
      description == '' ||
      image == '' ||
      rating == '' ||
      nightprice == ''
    ) {
      this.ErrorSnackBar('Please fill in all the fields');
    } else if (Number(rating) < 0 || Number(rating) > 5) {
      this.ErrorSnackBar('Please choose A rating between 0 and 5');
    } else if (name.length > 10) {
      this.ErrorSnackBar('Name To long');
    } else if (Number(nightprice) < 0 || Number(nightprice) > 10000) {
      this.ErrorSnackBar('pleae choose a realistic price');
    } else {
      if (Boolean(enpromo) == false) {
        promotion = String(0);
      }
      this.cityhotels = new Hotel(
        name,
        description,
        image,
        Number(rating),
        Number(nightprice),
        Number(promotion),
        this.hotel.city,
        Boolean(enpromo)
      );
      this.hotelsService
        .updateHotel(this.hotel.name, this.cityhotels)
        .subscribe(
          (response) => {
            this.SuccessSnackBar('Your Hotel has been successfully Updated');
            location.reload();
          },
          (error) => {
            this.ErrorSnackBar(' Creation Error ');
          }
        );
    }
  }

  constructor(
    private hotelsService: HotelsService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  ngOnInit(): void {}
}
