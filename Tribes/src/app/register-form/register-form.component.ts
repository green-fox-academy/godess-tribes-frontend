import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(private registerService: RegisterService) { }

  user = new User();
  username: string;
  password: string;
  kingdomName: string;
  submittedError: boolean;
  errorMessage: string;
  submitted = false;

  ngOnInit() {
  }


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
            this.user.id = resp.id;
            this.user.username = resp.username;
            this.user.kingdomId = resp.kingdomId;
            this.submitted = true;
        },
        resp => {
          alert(resp.error.error);
            this.errorMessage = resp.message;
        });
    }
  }
}
