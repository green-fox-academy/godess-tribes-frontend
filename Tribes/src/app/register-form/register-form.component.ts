import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model = new User();
  
  constructor() { }

  ngOnInit() {
  }

  passwordIsValid = false;

  /* validatePassword(password: string) : boolean {
    return (password.length >= 8)
  } */

  setPasswordToValid (password: string) : void {
    if (password.length >= 8) {
      this.passwordIsValid = true;
    }
  }

}
