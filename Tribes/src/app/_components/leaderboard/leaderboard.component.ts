import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { LeaderboardService } from 'src/app/_services/leaderboard.service';
import { LeaderboardItem } from 'src/app/_models/leaderboard-item';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  kingdoms: LeaderboardItem[];
  side : string;

  constructor(private leaderboardService: LeaderboardService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getKingdoms();
    // console.log(arguments, this.router.arguments);
  }

  getKingdoms () {
    this.side = this.router.url;
    this.leaderboardService.getKingdomListWithBuildingsFromBackend().subscribe(response =>
      {this.kingdoms = response.leaderboard});
  }
}
