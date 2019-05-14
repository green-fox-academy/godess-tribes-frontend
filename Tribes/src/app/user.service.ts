import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './LoginResultModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('http://localhost:8080/login', {
      username: username,
      password: password
    });
  }
}
