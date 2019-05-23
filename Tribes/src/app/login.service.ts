import { ROOT_URL } from './constants';
import { Injectable, PACKAGE_ROOT_URL } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './login-result-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>(ROOT_URL + '/login', {
      username: username,
      password: password
    });
  }
}
