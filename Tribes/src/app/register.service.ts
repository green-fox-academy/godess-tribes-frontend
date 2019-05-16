import { Injectable } from '@angular/core';
import {User} from './user';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  user = new User();
}
