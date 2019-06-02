import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from '../header.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  kingdomName: string;
  error: HttpErrorResponse;

  constructor(private headerService: HeaderService, private router: Router) {
    this.getKingdomName();
   }

  ngOnInit() {
    this.getKingdomName();
  }

  getKingdomName () {
  this.headerService.getDataFromBackend().subscribe (response => this.kingdomName = response.kingdomName);
  }

  updateKingdomName (name) {
    this.headerService.updateKingdomNameOnBackend(this.kingdomName)
    .subscribe(() => this.goBack());
    console.log(name);
    error => {
      this.error = error;
    }
  }

  goBack() {
    this.router.navigateByUrl('/kingdom');
  }
}
