import { Dentination } from './../models/dentination';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DentinationService {
  private baseUrl = 'http://localhost:3000/api/destination/';

  constructor(private http: HttpClient, private router: Router) {}

  getDentination(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
