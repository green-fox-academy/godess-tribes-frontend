import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { LeaderboardService } from 'src/app/_services/leaderboard.service';
import { LeaderboardItem } from 'src/app/_models/leaderboard-item';
import { KingdomResponse } from 'src/app/_models/kingdom-response';
import { LeaderboardResponse } from 'src/app/_models/leaderboard-response';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  kingdoms: LeaderboardItem[];
  side : string;
  compareDate : number;

  constructor(private leaderboardService: LeaderboardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getKingdoms();
    // console.log(arguments, this.router.arguments);
  }

  getKingdoms () {
    this.side = this.router.url;
    this.leaderboardService.getKingdomListWithBuildingsFromBackend().subscribe(response =>
      {this.kingdoms = response.leaderboard.sort(this.compareData)});
 /*    this.leaderboardService.getKingdomListWithSoldiersFromBackend().subscribe(response =>
      {this.kingdoms = response.leaderboard}); */
  }

  compareData = function(kingdom1: LeaderboardItem, kingdom2: LeaderboardItem) {
    return kingdom1.buildings > kingdom2.buildings ? -1 : 1;
  };
}
