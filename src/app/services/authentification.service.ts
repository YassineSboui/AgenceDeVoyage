import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private baseUrl = 'http://localhost:3000/api/auth/';

  constructor(private http: HttpClient) {}

  createUser(user: Object) {
    return this.http.post(`${this.baseUrl}signup/`, user);
  }
  getUser(user: Object) {
    return this.http.post(`${this.baseUrl}login/`, user);
  }
}
