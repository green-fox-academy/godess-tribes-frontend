import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  userModel: User = {username: "", password: ""};
  username: string;
  password: string;
  submitted = false;


  ngOnInit() {
  }

  onSubmit(){ 
    this.submitted = true;
    this.userService.login(
      this.username,
      this.password
    )
      .subscribe(r => console.log(r));
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

  get diagnostic() { return JSON.stringify(this.userModel); }

}
