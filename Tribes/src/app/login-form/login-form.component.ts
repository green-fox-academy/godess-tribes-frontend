import { Component, OnInit } from '@angular/core';
import { LoginResultModel } from '../login-result-model';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService, private router: Router) { }

  loginResultModel: LoginResultModel;
  username: string;
  password: string;
  errorMessage: string;
  submitted = false;


  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true;
    this.loginService.login(
      this.username,
      this.password
    )
      .subscribe(
        resp => {
          if (resp.tribes_token) {
            this.userService.setToken(resp.tribes_token);
            this.router.navigateByUrl('/mainpage');
          }
          if (resp.message) {
            this.errorMessage = resp.message;
          }
        },
        resp => {
          alert(resp.error.error);
        });
  }

  get diagnostic() { return JSON.stringify(this.loginResultModel); }

}
