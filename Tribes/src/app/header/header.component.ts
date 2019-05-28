import { KingdomResponse } from './../kingdom-response';
import { MapComponent } from './../map/map.component';
import { LeaderboardComponent } from './../leaderboard/leaderboard.component';
import { SettingsComponent } from './../settings/settings.component';

import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  kingdomName: string;

  constructor(private headerService: HeaderService) {
    this.getKingdomName();
  }

  ngOnInit() {
    this.getKingdomName();
  }

  getKingdomName() {
    this.headerService.getDataFromBackend().subscribe(response => this.kingdomName = response.kingdomName);
  }

}
