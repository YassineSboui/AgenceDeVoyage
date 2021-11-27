import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  Client: string = '617af3608b6a8a1648fd396c';
  Admin: string = '617af3528b6a8a1648fd396a';
  user: User = new User();
  hide = true;
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
      this.ErrorSnackBar('Veillez saisir une adresse valide');
    } else if (prenom == '') {
      this.ErrorSnackBar('Veillez saisir votre Prenom');
    } else if (nom == '') {
      this.ErrorSnackBar('Veillez saisir votre Nom');
    } else if (!this.verifmdp(password)) {
      this.ErrorSnackBar('veillez saisir un mot de  passe valide');
    } else if (password !== checkpassword) {
      this.ErrorSnackBar('Verifier votre mot de passe');
    } else {
      this.user = new User(email, password, nom, prenom, this.Client);
      this.authentificationService.createUser(this.user).subscribe(
        (response) => {
          this.SuccessSnackBar('Your account has been successfully created');
          this.router.navigate(['signin']);
        },
        (error) => {
          this.ErrorSnackBar('Already existing email');
        }
      );
    }
  }

  constructor(
    private _snackBar: MatSnackBar,
    private authentificationService: AuthentificationService,
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
