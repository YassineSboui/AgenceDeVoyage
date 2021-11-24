import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DentinationService {
  private baseUrl = 'http://localhost:3000/api/destination/';

  constructor(private http: HttpClient) {}

  getDentination(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getOneDentination(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
  createDentination(destination: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, destination);
  }
  updateDentination(name: string, destination: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}`, destination);
  }
  deleteDentination(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}`);
  }
  
}
