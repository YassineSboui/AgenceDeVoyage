import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private baseUrl = 'http://localhost:3000/api/offre/';

  constructor(private http: HttpClient) {}

  getOffre(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getOneOffre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createOffre(Offre: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, Offre);
  }
  updateOffre(id: string, Offre: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}${id}`, Offre);
  }
  deleteOffre(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
