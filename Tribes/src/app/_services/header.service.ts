import { KingdomResponse } from './../_models/kingdom-response';
import { ROOT_URL } from './../constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService} from './error-handling.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService, private router: Router) { }

  getDataFromBackend(): Observable<KingdomResponse> {
    return this.http.get<KingdomResponse>(ROOT_URL + '/kingdom');
  }

  updateKingdomNameOnBackend(name: string): Observable<any> {
    return this.http.put(ROOT_URL + '/kingdom', {name}, this.httpOptions)
    .pipe(
      catchError(this.errorHandlingService.handleError)
    );
  }

  logoutUser() {
    localStorage.removeItem('TOKEN');
    this.router.navigateByUrl('/login');
  }
}
