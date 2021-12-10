import { Component, Input, OnInit } from '@angular/core';
import { DentinationService } from 'src/app/services/dentination.service';
import { Dentination } from 'src/app/models/dentination';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatedestination',
  templateUrl: './updatedestination.component.html',
  styleUrls: ['./updatedestination.component.css'],
})
export class UpdatedestinationComponent implements OnInit {
  @Input() city: Dentination;
  dentination: Dentination = new Dentination('', '', '', '', 0, 0, 0);

  Modifier(
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
      this.ErrorSnackBar('Please fill in all the fields');
    } else if (name.length > 10 || abv.length > 5) {
      this.ErrorSnackBar('Name or Abbreviation To long');
    } else if (Number(prix) < 0 || Number(prix) > 10000) {
      this.ErrorSnackBar('pleae choose a realistic price');
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
      this.DentinationService.updateDentination(
        this.city.name,
        this.dentination
      ).subscribe(
        (response) => {
          this.SuccessSnackBar('Destination changed successfully');
          location.reload();
        },
        (error) => {
          this.ErrorSnackBar('Error Modification');
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
