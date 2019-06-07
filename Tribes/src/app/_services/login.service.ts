import { ROOT_URL } from './../constants';
import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './../_models/login-result-model';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  login(username: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>(ROOT_URL + '/login', { username, password })
      .pipe(catchError(this.errorHandlingService.handleError));
  }
}
