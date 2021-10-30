import { Component, OnInit } from '@angular/core';

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
  authentification(email: string, password: string, checkpassword: string) {
    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      alert(email + " n'est pas une adresse valide");
    } else if (!this.verifmdp(password)) {
      alert('veillez saisir un Mot de  passe valide');
    } else if (password !== checkpassword) {
      alert('Verifier votre mot de passe');
    } else {
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
