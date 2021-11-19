import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css'],
})
export class AdminnavbarComponent implements OnInit {
  user: string = String(localStorage.getItem('loggedUser'));
  connected: boolean = Boolean(localStorage.getItem('isloggedIn'));
  deconnecter() {
    this.authentificationService.logout();
    this.connected = false;
    this.router.navigate(['signin']);
  }
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
