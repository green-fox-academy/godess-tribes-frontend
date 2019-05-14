import { Component, OnInit } from '@angular/core';
import { LoginResultModel } from '../login-result-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  loginResultModel: LoginResultModel;
  username: string;
  password: string;
  submitted = false;


  ngOnInit() {
  }

  onSubmit(){ 
    this.submitted = true;
    this.loginResultModel = {username: this.username, password: this.password};
    // this.userService.login(
    //   this.username,
    //   this.password
    // )
      // .subscribe(r => console.log(r));
        // r => {
        //   if (r.token) {
        //     this.customer.setToken(r.token);
        //     this.router.navigateByUrl('/dashboard');
        //   }
        // },
        // r => {
        //   alert(r.error.error);
        // });
  }

  get diagnostic() { return JSON.stringify(this.loginResultModel); }

}
