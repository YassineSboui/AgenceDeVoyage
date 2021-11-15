import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private baseUrl = 'http://localhost:3000/api/mail/';

  constructor(private http: HttpClient) {}

  postmail(mail: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, mail);
  }
}
