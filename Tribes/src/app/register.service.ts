import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 // rootUrl = 'http://virtserver.swaggerhub.com/szutsj/godess-tribes-backend/1.0.0';
 // rootUrl: string = 'https://app.swaggerhub.com/apis-docs/adamgyulavari/tribes/1.0.0#/'
  rootUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  register(username: string, password: string, kingdomName: string): Observable<User> {
    return this.http.post<User>(this.rootUrl + '/register', {
      username: username,
      password: password,
      kingdomName: kingdomName,
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return throwError(`An error occurred: ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
        return throwError(
          `${error.error.message} Please try an other one.`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
