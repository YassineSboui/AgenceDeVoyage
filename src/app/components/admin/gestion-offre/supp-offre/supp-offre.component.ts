import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Offre } from 'src/app/models/offre';
import { HotelsService } from 'src/app/services/hotels.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-supp-offre',
  templateUrl: './supp-offre.component.html',
  styleUrls: ['./supp-offre.component.css'],
})
export class SuppOffreComponent implements OnInit {
  @Input() offre: Offre;
  getprice() {
    return (
      Number(this.offre.price) * ((100 - Number(this.offre.promo)) / 100) -
      ((Number(this.offre.price) * ((100 - Number(this.offre.promo)) / 100)) %
        1)
    );
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  Delete() {
    this.offreService.deleteOffre(String(this.offre._id)).subscribe(
      (response) => {
        this.SuccessSnackBar('Offer Deleted successfully');
        location.reload();
      },
      (error) => {
        this.ErrorSnackBar('Failed Modification');
      }
    );
  }
  constructor(
    private offreService: OffreService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
}
