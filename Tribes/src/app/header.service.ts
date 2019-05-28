import { KingdomResponse } from './kingdom-response';
import { ROOT_URL } from './constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getDataFromBackend(): Observable<KingdomResponse> {
    return this.http.get<KingdomResponse>(ROOT_URL + '/kingdom');
  }

  updateKingdomNameOnBackend(name: string): Observable<any> {
    return this.http.post(ROOT_URL + '/kingdom', {name}, this.httpOptions);
  }
}
