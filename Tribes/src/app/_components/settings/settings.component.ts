import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { HeaderService } from '../../_services/header.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  kingdomName: string;
  error: HttpErrorResponse;
  isError = false;
  submittedError = false;

  constructor(private headerService: HeaderService, private router: Router) {
    this.getKingdomName();
   }

  ngOnInit() {
    this.getKingdomName();
  }

  getKingdomName() {
  this.headerService.getDataFromBackend().subscribe (response => this.kingdomName = response.kingdomName);
  }

  updateKingdomName(valid) {
    if (!valid) {
      this.submittedError = true;
      return;
    }
    this.headerService.updateKingdomNameOnBackend(this.kingdomName)
    .subscribe(
      resp => {
        this.goBack();
      },
      error => {
        this.isError = true;
        this.error = error;
      });
  }

  goBack() {
    this.router.navigateByUrl('/kingdom');
  }
}
