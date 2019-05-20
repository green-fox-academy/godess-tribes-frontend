<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';
>>>>>>> master

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class UserService {

  constructor() { }
=======

export class UserService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
>>>>>>> master
}
