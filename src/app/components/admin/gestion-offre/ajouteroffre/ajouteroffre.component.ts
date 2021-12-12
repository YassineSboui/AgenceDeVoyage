import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Dentination } from 'src/app/models/dentination';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';
import { DentinationService } from 'src/app/services/dentination.service';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotel } from 'src/app/models/hotel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouteroffre',
  templateUrl: './ajouteroffre.component.html',
  styleUrls: ['./ajouteroffre.component.css'],
})
export class AjouteroffreComponent implements OnInit {
  offre: Offre;
  offres: Offre[];
  destinations: Dentination[] = [];
  OffreForm: FormGroup = new FormGroup({});
  Allhotels: Hotel[] = [];
  cityhotels: Hotel[] = [];
  selectedhotel: Hotel;
  selecteddestination: Dentination;
  continue: boolean = true;
  price: number = 0;
  constructor(
    private fb: FormBuilder,
    private offreService: OffreService,
    private DentinationService: DentinationService,
    private hotelsService: HotelsService,
    private _snackBar: MatSnackBar
  ) {}

  checkprice() {
    if (
      this.OffreForm.value['days'] == null ||
      this.OffreForm.value['adults'] == null ||
      this.OffreForm.value['rooms'] == null ||
      this.OffreForm.value['children'] == null
    ) {
      this.ErrorSnackBar('Please fill in all the fields');
    } else if (
      this.OffreForm.value['days'] < 1 ||
      this.OffreForm.value['days'] > 60
    ) {
      this.ErrorSnackBar('choose number of date beetween 1 and 60');
    } else {
      this.DentinationService.getOneDentination(
        this.OffreForm.value['destination']
      ).subscribe(
        (response) => {
          this.selecteddestination = response;
          this.hotelsService
            .getOneHotel(this.OffreForm.value['hotel'])
            .subscribe(
              (response) => {
                this.selectedhotel = response;
                this.price =
                  this.selectedhotel.nightprice *
                    this.OffreForm.value['days'] *
                    this.OffreForm.value['rooms'] +
                  this.selecteddestination.price;
                this.continue = false;
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );
    }
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
  offerlist() {
    this.offreService.getOffre().subscribe(
      (response) => {
        this.offres = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

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

  getcity(city: String) {
    if (city != 'none') {
      this.getcityhotels(city);
    }
  }

  public get images() {
    return this.OffreForm.get('images') as FormArray;
  }
  onAjouter() {
    this.images.push(this.fb.control(''));
  }
  ajouteroffre() {
    if (
      this.OffreForm.value['promo'] < 5 ||
      this.OffreForm.value['promo'] > 90
    ) {
      this.ErrorSnackBar('choose number of promo beetween 5 and 90');
    } else if (this.OffreForm.value['images'] == Array(0)) {
      this.ErrorSnackBar('choose a least one image URL');
    } else if (this.OffreForm.value['desc'] == null) {
      this.ErrorSnackBar('please describe the offer');
    } else {
      this.offre = new Offre(
        this.OffreForm.value['days'],
        this.OffreForm.value['rooms'],
        this.OffreForm.value['adults'],
        this.OffreForm.value['children'],
        this.OffreForm.value['desc'],
        this.OffreForm.value['destination'],
        this.OffreForm.value['hotel'],
        this.price,
        this.OffreForm.value['promo'],
        this.OffreForm.value['images']
      );
      console.log(this.offre);
      this.offreService.createOffre(this.offre).subscribe(
        (response) => {
          this.SuccessSnackBar('Your Offer has been successfully created');
          location.reload();
        },
        (error) => {
          this.ErrorSnackBar(' Creation Error ');
        }
      );
    }
  }
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  ngOnInit(): void {
    this.OffreForm = this.fb.group({
      days: [],
      rooms: [],
      adults: [],
      children: [],
      desc: [],
      destination: [],
      hotel: [],
      price: [],
      promo: [],
      images: this.fb.array([]),
    });
    this.destinationlist();
    this.offerlist();
  }
}
