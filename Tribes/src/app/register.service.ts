import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterResultModel } from './register-result-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  rootUrl: string = 'http://virtserver.swaggerhub.com/szutsj/godess-tribes-backend/1.0.0';

  constructor(private http: HttpClient) { }

  register(username: string, password: string, kingdomName: string): Observable<RegisterResultModel>{
    return this.http.post<RegisterResultModel>(this.rootUrl + '/register', {
      username: username,
      password: password,
      kingdomName: kingdomName,
    });
  }
}