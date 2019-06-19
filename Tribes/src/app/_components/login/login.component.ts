import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterFormComponent} from '../register-form/register-form.component';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog, private loginService: LoginService) { }

  ngOnInit() {
  }

  openRegistrationDialog() {
      this.dialog.open(RegisterFormComponent, {
      });
  }
}
