import { MapComponent } from './../map/map.component';
import { LeaderboardComponent } from './../leaderboard/leaderboard.component';
import { SettingsComponent } from './../settings/settings.component';

import { MOCKUSER } from './../../mock-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  User = MOCKUSER;  

  constructor() { }

  ngOnInit() {
  }

}
