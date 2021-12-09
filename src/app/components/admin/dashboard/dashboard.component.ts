import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mail } from 'src/app/models/mail';
import { Reservation } from 'src/app/models/reservation';
import { MailService } from 'src/app/services/mail.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allreservation: Reservation[];
  waitingreservation: Reservation[];
  acceptedreservation: Reservation[];
  onereservation: Reservation;
  count: number;
  count1: number;
  mail: Mail;

  DeleteOlderReservation(acceptedreservation: Reservation[]) {
    var today = new Date();
    var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    for (let index = 0; index < acceptedreservation.length; index++) {
      if (new Date(acceptedreservation[index].checkin) < new Date(date)) {
        this.reservationService
          .deleteReservation(acceptedreservation[index]._id)
          .subscribe(
            (response) => {},
            (error) => {
              this.ErrorSnackBar('Fail to delete');
            }
          );
      }
    }
  }

  sendresult(mail: string, text: string) {
    this.mail = new Mail('', mail, 'Resevation Result', text);
    this.mailService.sendmail(this.mail).subscribe(
      (response) => {},
      (error) => {
        this.ErrorSnackBar('Fail to send');
      }
    );
  }

  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    {
      data: [],
      label: 'Number Of Hotels Reserved',
    },
  ];

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

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
  headElements1 = [
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
  ];
  getReservations() {
    this.reservationService.getReservation().subscribe(
      (response) => {
        this.allreservation = response;
        this.waitingreservation = this.allreservation.filter(
          (element) => element.status == 'En Attente'
        );
        this.count = this.waitingreservation.length;

        this.acceptedreservation = this.allreservation.filter(
          (element) => element.status == 'Accepted'
        );
        this.DeleteOlderReservation(this.acceptedreservation);
        this.count1 = this.acceptedreservation.length;
        for (let index = 0; index < this.allreservation.length; index++) {
          if (
            this.chartLabels.indexOf(this.allreservation[index].destination) ===
            -1
          ) {
            this.chartLabels.push(this.allreservation[index].destination);
          }
        }
        for (let index = 0; index < this.chartLabels.length; index++) {
          var k = 0;
          for (let i = 0; i < this.allreservation.length; i++) {
            if (this.chartLabels[index] == this.allreservation[i].destination) {
              k++;
            }
          }
          this.chartDatasets[0].data.push(k);
        }
        this.chartDatasets[0].data.push(0);
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
      St
    );

    this.reservationService
      .updateReservation(reservation1._id, this.onereservation)
      .subscribe(
        (response) => {
          if (St == 'Accepted') {
            this.SuccessSnackBar('Reservation Accepted successfully');
            this.sendresult(
              String(this.onereservation.email),
              'Your Reservation was Accepted we will call you for more confirmation'
            );
          } else if (St == 'Denied') {
            this.SuccessSnackBar('Reservation Denied successfully');
            this.sendresult(
              String(this.onereservation.email),
              'Sorry Your Reservation was Denied'
            );
          } else {
            this.SuccessSnackBar('Reservation Still not Responsed');
          }
          for (var i = 0; i < this.waitingreservation.length; i++) {
            if (
              this.waitingreservation[i]._id == reservation1._id &&
              St != 'En Attente'
            ) {
              this.waitingreservation.splice(i, 1);
              this.count = this.waitingreservation.length;
            }
          }
          if (St == 'Accepted') {
            this.acceptedreservation.push(this.onereservation);
            this.count1 = this.acceptedreservation.length;
          }
        },
        (error) => {
          console.log(reservation1._id);
          this.ErrorSnackBar('Error Modification');
        }
      );
  }

  constructor(
    private _snackBar: MatSnackBar,
    private reservationService: ReservationService,
    private router: Router,
    private mailService: MailService
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
