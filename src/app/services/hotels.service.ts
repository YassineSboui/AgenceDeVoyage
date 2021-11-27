import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private baseUrl = 'http://localhost:3000/api/hotels/';

  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getOneHotel(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
  createHotel(hotels: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, hotels);
  }
  updateHotel(name: string, hotels: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}`, hotels);
  }
  deleteHotel(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
  
}

