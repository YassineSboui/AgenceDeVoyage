import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  verifmdp(mdp: string) {
    return (
      mdp.match(/[0-9]/g) &&
      mdp.match(/[A-Z]/g) &&
      mdp.match(/[a-z]/g) &&
      mdp.length >= 8
    );
  }
  authentification(email: string, password: string) {
    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      this.openSnackBar('Veillez saisir une adresse valide');
    } else if (!this.verifmdp(password)) {
      this.openSnackBar('veillez saisir un mot de  passe valide');
    } else {
    }
  }

  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string) {
    this._snackBar.open(message, 'ERREUR', { duration: 3000 });
  }

  ngOnInit(): void {}
}
