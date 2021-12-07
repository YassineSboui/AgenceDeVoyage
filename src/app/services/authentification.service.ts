import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private baseUrl = 'http://localhost:3000/api/auth/';
  public loggedUser: string ;
  public UserMail: string ;
  public isloggedIn: Boolean = false;
  public role: string ;

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.role = undefined;
    this.UserMail = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('UserRole');
    localStorage.removeItem('UserMail');
  }
  SignIn(user: User) {
    this.loggedUser = user.firstName + ' ' + user.lastName;
    this.isloggedIn = true;
    this.role = user.role;
    this.UserMail = user.email;
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('UserMail', this.UserMail);
    localStorage.setItem('UserRole', this.role); 
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
  }

  constructor(private http: HttpClient, private router: Router) {}

  createUser(user: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}signup/`, user);
  }
  getUser(user: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}login/`, user);
  }
}
