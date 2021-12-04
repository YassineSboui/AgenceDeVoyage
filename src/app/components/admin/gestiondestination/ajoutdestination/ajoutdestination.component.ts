import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutdestination',
  templateUrl: './ajoutdestination.component.html',
  styleUrls: ['./ajoutdestination.component.css'],
})
export class AjoutdestinationComponent implements OnInit {
  dentination: Dentination = new Dentination('', '', '', '', 0, 0, 0);

  ajoutDestination(
    name: string,
    abv: string,
    desc: string,
    img: string,
    prix: string,
    long: string,
    lal: string
  ) {
    if (
      name == '' ||
      abv == '' ||
      desc == '' ||
      img == '' ||
      prix == '' ||
      long == '' ||
      lal == ''
    ) {
      this.ErrorSnackBar(' Please fill in all the fields');
    } else {
      this.dentination = new Dentination(
        name,
        abv,
        desc,
        img,
        Number(prix),
        Number(long),
        Number(lal)
      );
      this.DentinationService.createDentination(this.dentination).subscribe(
        (response) => {
          this.SuccessSnackBar(
            'Your Destination has been successfully created'
          );
        },
        (error) => {
          this.ErrorSnackBar(' Creation Error ');
        }
      );
    }
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

  ngOnInit(): void {}
}
