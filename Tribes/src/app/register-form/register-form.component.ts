import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  model = this.registerService.user;

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
