import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {
  user: string = String(localStorage.getItem('loggedUser'));
  connected: boolean = Boolean(localStorage.getItem('isloggedIn'));
  constructor() { }

  ngOnInit(): void {
  }

}
