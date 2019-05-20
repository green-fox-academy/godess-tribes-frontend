import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {UserService} from '../user.service';
import { LoginService} from '../login.service';
import {User} from '../user';
import {Router} from '@angular/router';

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
    private router: Router)
    { }

  user = new User();
  username: string;
  password: string;
  kingdomName: string;
  submittedError: boolean;
  errorMessage: string;
  submitted = false;
  processStarted = false;

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
            this.user.kingdomId = resp.kingdomId;
            this.submitted = true;
            this.loginService.login(this.username, this.password)
            .subscribe(
              resp => {
                if (resp.token) {
                  this.userService.setToken(resp.token);
                  this.router.navigateByUrl('/kingdom');
                }
              },
            )
        },
        resp => {
          alert(resp.error.error);
            this.errorMessage = resp.message;
        });
    }
  }
}
