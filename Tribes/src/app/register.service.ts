import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  rootUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
              private errorHandlingService: ErrorHandlingService) { }


  register(username: string, password: string, kingdomName: string): Observable<User> {
    return this.http.post<User>(this.rootUrl + '/register', {
      username: username,
      password: password,
      kingdomName: kingdomName,
    })
    .pipe(
      catchError(this.errorHandlingService.handleError)
    );
  }
}
