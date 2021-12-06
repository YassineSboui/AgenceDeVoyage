
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:3000/api/reservation/';

  constructor(private http: HttpClient) {}

  getReservation(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getOneReservation(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createReservation(Reservation: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, Reservation);
  }
  updateReservation(id: string, Reservation: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}${id}`, Reservation);
  }
  deleteReservation(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
  
}

