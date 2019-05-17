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
  loginResultModel: LoginResultModel;
  username: string;
  password: string;
  errorMessage: string;
  submitted = false;
  submittedError: boolean;

  constructor(private loginService: LoginService, private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit({value, valid}): void {
    if (!valid) {
      this.submittedError = true;
      return;

    } else {
      this.submittedError = false;
      this.submitted = true;
      this.loginService.login(
        this.username,
        this.password
      )
        .subscribe(
          resp => {
            if (resp.token) {
              this.userService.setToken(resp.token);
              this.router.navigateByUrl('/kingdom');
            }
            if (resp.message) {
              this.errorMessage = resp.message;
            }
          },
          resp => {
            alert(resp.error.error);
          });
    }
  }
}
