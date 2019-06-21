import { Component, OnInit } from '@angular/core';
import { LeaderboardResponse } from 'src/app/_models/leaderboard-response';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  kingdoms: LeaderboardResponse[];

  constructor() { }

  ngOnInit() {
  }

}
