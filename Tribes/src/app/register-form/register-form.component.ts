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

  // model = this.registerService.user;
  username: string;
  password: string;
  kingdomName: string;
  submittedError: boolean;
  submitted = false;

  isPasswordInvalid = false;

  onSubmit({value, valid}): void {
    if (!valid) {
      this.submittedError = true;
      return;
    } else {
      this.submittedError = false;

      this.submitted = true;
  } 
}
}
