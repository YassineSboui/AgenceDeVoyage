import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private baseUrl = 'http://localhost:3000/api/hotels/';

  constructor(private http: HttpClient) {}

  getDentination(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getOneDentination(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
  createDentination(hotels: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, hotels);
  }
  updateDentination(name: string, hotels: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}`, hotels);
  }
  deleteDentination(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
  
}

