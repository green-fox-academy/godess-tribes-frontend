import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  kingdomName: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  getKingdomName () {
  this.headerService.getDataFromBackend().subscribe (response => this.kingdomName = response.kingdomName);
  }

}
