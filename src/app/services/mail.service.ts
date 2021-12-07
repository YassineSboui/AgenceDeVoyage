import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private baseUrl = 'http://localhost:3000/api/mail/';
  private baseUrl2 = 'http://localhost:3000/api/mail/sendresult/';
  constructor(private http: HttpClient) {}

  postmail(mail: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, mail);
  }
  sendmail(mail: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, mail);
  }
}
