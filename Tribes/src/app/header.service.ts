import { KingdomResponse } from './kingdom-response';
import { ROOT_URL } from './constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService} from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getDataFromBackend(): Observable<KingdomResponse> {
    return this.http.get<KingdomResponse>(ROOT_URL + '/kingdom');
  }

  updateKingdomNameOnBackend(name: string): Observable<any> {
    return this.http.put(ROOT_URL + '/kingdom', {name}, this.httpOptions)
    .pipe(
      catchError(this.errorHandlingService.handleError)
    );
  }
}
