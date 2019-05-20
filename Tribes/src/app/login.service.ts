import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './login-result-model';
import { ROOT_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  rootUrl = ROOT_URL;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>(this.rootUrl + '/login', {
      username: username,
      password: password
    });
  }
}
