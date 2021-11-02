import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: User = new User();

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
      this.ErrorSnackBar('Veillez saisir une adresse valide');
    } else if (!this.verifmdp(password)) {
      this.ErrorSnackBar('veillez saisir un mot de  passe valide');
    } else {
      this.user = new User(email, password);
      this.authentificationService.getUser(this.user).subscribe(
        (response) => {
          console.log(response);
          this.SuccessSnackBar('Connexion réussie');
          this.router.navigate(['../accueil']);
        },
        (error) => {
          console.log(error);
          this.ErrorSnackBar('Echec de Connextion');
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
    this._snackBar.open(message, 'REUSSI', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERREUR', { duration: 3000 });
  }
  ngOnInit(): void {}
}
