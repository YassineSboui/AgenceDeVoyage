import { Component, Input, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { Hotel } from 'src/app/models/hotel';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reservation } from 'src/app/models/reservation';
import { Router } from '@angular/router';
import { Offre } from 'src/app/models/offre';

@Component({
  selector: 'app-offre-reservation',
  templateUrl: './offre-reservation.component.html',
  styleUrls: ['./offre-reservation.component.css'],
})
export class OffreReservationComponent implements OnInit {
  @Input() offre: Offre;
  @Input() newPrice: number;

  reservation: Reservation;
  confiramtion: Boolean = false;
  check_in: string;
  usermail: string = String(localStorage.getItem('UserMail'));
  mail: string = '';
  mindate: String;
  reloadCurrentRoute() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['destination']);
    });
  }

  getmindate() {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDate() + 1);
    this.mindate = date;
  }

  CreateReservation(
    city: string,
    checkin: string,
    email: string,
    phone: string
  ) {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      (today.getDate() + 1);
    if (city == '' || checkin == '' || email == '' || phone == '') {
      ('/[0-9]{8}/');
      this.ErrorSnackBar(' Please fill in all the fields');
    } else if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      this.ErrorSnackBar('please choose a valide adress');
    } else if (!phone.match(/^[0-9]{8}$/)) {
      this.ErrorSnackBar('Please choose a valide number');
    } else if (new Date(checkin) < new Date(date)) {
      this.ErrorSnackBar(' Please choose a Future Date  ');
    } else {
      this.check_in = checkin;
      this.reservation = new Reservation(
        city,
        new Date(checkin),
        Number(this.offre.days),
        Number(this.offre.rooms),
        Number(this.offre.adults),
        Number(this.offre.children),
        email,
        Number(phone),
        this.offre.destination,
        this.offre.hotel,
        this.newPrice,
        'En Attente'
      );
      this.confiramtion = true;
    }
  }
  back() {
    this.confiramtion = false;
  }
  SendReservation() {
    this.reservationService.createReservation(this.reservation).subscribe(
      (response) => {
        this.SuccessSnackBar(
          'Your Reservation has been successfully Sended wait for admin Response'
        );
        this.reloadCurrentRoute();
      },
      (error) => {
        this.ErrorSnackBar('Error ');
      }
    );
  }

  constructor(
    private _snackBar: MatSnackBar,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  ngOnInit(): void {
    if (this.usermail[0] != '' && this.usermail != 'null') {
      this.mail = this.usermail;
    }
    this.getmindate();
  }
}
