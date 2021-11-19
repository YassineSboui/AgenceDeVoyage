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
  admin: boolean = (localStorage.getItem('UserRole'))=='617af3528b6a8a1648fd396a';
  identifiant: boolean;
  deconnecter() {
    this.authentificationService.logout();
    this.connected = false;
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
