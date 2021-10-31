import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  verifmdp(mdp: string) {
    return (
      mdp.match(/[0-9]/g) &&
      mdp.match(/[A-Z]/g) &&
      mdp.match(/[a-z]/g) &&
      mdp.length >= 8
    );
  }
  authentification(
    email: string,
    password: string,
    checkpassword: string,
    nom: string,
    prenom: string
  ) {
    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      this.openSnackBar('Veillez saisir une adresse valide');
    } else if (prenom == '') {
      this.openSnackBar('Veillez saisir votre Prenom');
    } else if (nom == '') {
      this.openSnackBar('Veillez saisir votre Nom');
    } else if (!this.verifmdp(password)) {
      this.openSnackBar('veillez saisir un mot de  passe valide');
    } else if (password !== checkpassword) {
      this.openSnackBar('Verifier votre mot de passe');
    } else {
    }
  }

  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string) {
    this._snackBar.open(message, 'ERREUR', { duration: 3000 });
  }
  ngOnInit(): void {}
}
