import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestiondestination',
  templateUrl: './gestiondestination.component.html',
  styleUrls: ['./gestiondestination.component.css'],
})
export class GestiondestinationComponent implements OnInit {
  destinations: Dentination[] = [];
  destination: Dentination = new Dentination(' ', ' ', ' ', ' ', 0, 0, 0);
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

  destinationDelete(name: string) {
    this.DentinationService.deleteDentination(name).subscribe(
      (response) => {
        this.SuccessSnackBar('Destination Deleted successfully');
        this.router
          .navigateByUrl('/RefreshComponent', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['admin/Gestiondestination']);
          });
      },
      (error) => {
        this.ErrorSnackBar('Failed Modification');
      }
    );
  }

  constructor(
    private _snackBar: MatSnackBar,
    private DentinationService: DentinationService,
    private router: Router
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
