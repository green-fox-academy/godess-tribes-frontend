import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_URL } from './constants';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  updateKingdomNameOnBackend(name: string): Observable<any> {
    return this.http.put(ROOT_URL + '/kingdom', {name}, this.httpOptions);
  }
}
