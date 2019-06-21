import { Injectable } from '@angular/core';
import { LeaderboardResponse } from '../_models/leaderboard-response';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_URL } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http : HttpClient) { }

  getKingdomListWithBuildingsFromBackend(): Observable<LeaderboardResponse[]> {
    return this.http.get<LeaderboardResponse[]>(ROOT_URL + '/leaderboard/buildings')
  }
}
