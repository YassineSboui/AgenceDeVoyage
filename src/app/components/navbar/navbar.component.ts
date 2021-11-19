import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ActivatedRoute } from '@angular/router';
import { SigninComponent } from './../../components/authentification/signin/signin.component';
import { SignupComponent } from './../../components/authentification/signup/signup.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: string = String(localStorage.getItem('loggedUser'));
  connected: boolean = Boolean(localStorage.getItem('isloggedIn'));
  identifiant: boolean;
  deconnecter() {
    this.authentificationService.logout();
    this.connected = false;
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }
  connecter() {
    this.router.navigate(['/signin']);
  }
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.identifiant=(this.activatedRoute.component==SigninComponent||this.activatedRoute.component==SignupComponent)
  }
}
