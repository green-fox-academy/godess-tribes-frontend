import {Injectable} from '@angular/core';
import { TOKEN } from './../constants';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
