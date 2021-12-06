import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  reservation: Reservation[];
  onereservation: Reservation;
  elements: any = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ];

  headElements = [
    'City',
    'Checkin',
    'Days',
    'Rooms',
    'Adults',
    'Children',
    'Email',
    'Phone',
    'Destination',
    'Hotel',
    'Price',
    'Status',
  ];

  getReservations() {
    this.reservationService.getReservation().subscribe(
      (response) => {
        this.reservation = response;
        this.reservation = this.reservation.filter(
          (element) => element.status == 'En Attente'
        );
        return this.reservation;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Modifier(reservation1: Reservation, St: string) {
    this.onereservation = new Reservation(
      reservation1.city,
      reservation1.checkin,
      reservation1.days,
      reservation1.rooms,
      reservation1.adults,
      reservation1.children,
      reservation1.email,
      reservation1.phone,
      reservation1.destination,
      reservation1.hotel,
      reservation1.price,
      reservation1.hotel,
      St
    );
    this.reservationService
      .updateReservation(reservation1._id,this.onereservation)
      .subscribe(
        (response) => {
          if (St == 'Accepted') {
            this.SuccessSnackBar('Reservation Accepted successfully');
          } else if (St == 'Denied') {
            this.SuccessSnackBar('Reservation Denied successfully');
          } else {
            this.SuccessSnackBar('Reservation Still not Responsed');
          }
          for (var i = 0; i < this.reservation.length; i++) {
            if (this.reservation[i]._id == reservation1._id) {
              this.reservation[i].status = St;
            }
          }
        },
        (error) => {
          console.log(reservation1._id)
          this.ErrorSnackBar('Error Modification');
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
    this.getReservations();
  }
}
