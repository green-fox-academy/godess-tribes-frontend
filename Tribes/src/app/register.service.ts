import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  rootUrl: string = 'http://virtserver.swaggerhub.com/szutsj/godess-tribes-backend/1.0.0';
 // rootUrl: string = 'https://app.swaggerhub.com/apis-docs/adamgyulavari/tribes/1.0.0#/'
  constructor(private http: HttpClient) { }

  register(username: string, password: string, kingdomName: string): Observable<User>{
    return this.http.post<User>(this.rootUrl + '/register', {
      username: username,
      password: password,
      kingdomName: kingdomName,
    });
  }
}