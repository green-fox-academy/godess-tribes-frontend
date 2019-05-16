import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {UserService} from '../user.service';
import {User} from '../user';
import {RegisterResultModel} from '../register-result-model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  user = new User();
  username: string;
  password: string;
  kingdomName: string;
  submittedError: boolean;
  errorMessage: string;

  isPasswordInvalid = false;

  onSubmit({value, valid}): void {
    if (!valid) {
      this.submittedError = true;
      return;
    } else {
      this.submittedError = false;

      this.registerService.register(
        this.username,
        this.password,
        this.kingdomName
      )
      .subscribe(
        resp => {

          if (!resp.status) {
            this.user.userId = resp.id;
            this.user.username = resp.username;
            this.user.kingdomId = resp.kingdomId;  
          }
          if (resp.status) {
            this.errorMessage = resp.message;
          }
        },
        resp => {
          alert(resp.error.error);
        });
  } 
}
}

