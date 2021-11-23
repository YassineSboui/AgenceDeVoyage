import { Component, OnInit } from '@angular/core';
import { Dentination } from 'src/app/models/dentination';
import { DentinationService } from 'src/app/services/dentination.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajoutdestination',
  templateUrl: './ajoutdestination.component.html',
  styleUrls: ['./ajoutdestination.component.css']
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
      this.ErrorSnackBar('Veillez remplir tous les champs');
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
          this.SuccessSnackBar('Votre Destination a été créé avec succès');
        },
        (error) => {
          this.ErrorSnackBar('Echec');
        }
      );
    }
  }

  constructor(
    private _snackBar: MatSnackBar,
    private DentinationService: DentinationService
  ) {}
  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'REUSSI', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERREUR', { duration: 3000 });
  }


  ngOnInit(): void {
  }

}
