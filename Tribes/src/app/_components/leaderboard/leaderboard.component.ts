import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/_services/leaderboard.service';
import { LeaderboardItem } from 'src/app/_models/leaderboard-item';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  kingdoms: LeaderboardItem[];

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.getKingdoms();
  }

  getKingdoms () {
    this.leaderboardService.getKingdomListWithBuildingsFromBackend().subscribe(response =>
      {this.kingdoms = response.leaderboard});
  }

}
