import { Component, Input, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { Hotel } from 'src/app/models/hotel';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reservation } from 'src/app/models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() destination: Dentination;
  @Input() hotel: Hotel;
  reservation: Reservation;
  confiramtion: Boolean = false;
  prixRooms: number = 0;
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
    days: string,
    rooms: string,
    adults: string,
    children: string,
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
    if (
      city == '' ||
      checkin == '' ||
      days == '' ||
      rooms == '' ||
      adults == '' ||
      children == '' ||
      email == '' ||
      phone == ''
    ) {
      ('/[0-9]{8}/');
      this.ErrorSnackBar(' Please fill in all the fields');
    } else if (Number(days) < 1 || Number(days) > 60) {
      this.ErrorSnackBar(
        ' Please choose the number of days between 1 and 60  '
      );
    } else if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      this.ErrorSnackBar('please choose a valide adress');
    } else if (!phone.match(/^[0-9]{8}$/)) {
      this.ErrorSnackBar('Please choose a valide number');
    } else if (new Date(checkin) < new Date(date)) {
      this.ErrorSnackBar(' Please choose a Future Date  ');
    } else {
      var price =
        this.destination.price +
        this.hotel.nightprice * Number(days) * Number(rooms);
      this.prixRooms = this.hotel.nightprice * Number(rooms);
      this.check_in = checkin;
      this.reservation = new Reservation(
        city,
        new Date(checkin),
        Number(days),
        Number(rooms),
        Number(adults),
        Number(children),
        email,
        Number(phone),
        this.destination.name,
        this.hotel.name,
        price,
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
