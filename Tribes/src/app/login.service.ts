import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './login-result-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  rootUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>(this.rootUrl + '/login', {
      username: username,
      password: password
    });
  }
}
