import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {UserService} from '../user.service';
import { LoginService} from '../login.service';
import {User} from '../user';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegisterResultModel } from '../register-result-model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog) { }

  user = new User();
  username: string;
  password: string;
  kingdomName: string;
  submittedError: boolean;
  errorMessage: string;
  submitted = false;
  processStarted = false;
  registerResult = new RegisterResultModel();

  ngOnInit() {
  }

  startProcess() {
    this.processStarted = true;
  }

  onSubmit({value, valid}): void {
    if (!valid) {
      this.submittedError = true;
      return;
    } else {
      this.startProcess();
      this.submittedError = false;

      this.registerService.register(
        this.username,
        this.password,
        this.kingdomName
      )
      .subscribe(
        resp => {
            this.processStarted = false;
            this.user.id = resp.id;
            this.user.username = resp.username;
            this.user.kingdomName = resp.kingdomName;
            this.submitted = true;
            this.loginService.login(this.username, this.password)
              .subscribe(
                resp2 => {
                  if (resp2.token) {
                    this.userService.setToken(resp2.token);
                    this.router.navigateByUrl('/kingdom');
                    this.dialog.closeAll();
                  }
                });
        },
        error => {
            this.registerResult = error;
        }
   /*      resp => {
          this.errorMessage = resp.message;
        } */
        );
    }
  }
}
