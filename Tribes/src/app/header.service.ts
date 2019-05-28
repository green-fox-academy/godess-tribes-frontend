import { KingdomResponse } from './kingdom-response';
import { ROOT_URL } from './constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  getDataFromBackend(): Observable<KingdomResponse> {
    return this.http.get<KingdomResponse>(ROOT_URL + '/kingdom');
  }
}