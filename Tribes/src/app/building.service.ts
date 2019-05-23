import { BUILDINGS } from './mock-building';
import { Building } from './building';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BuildingsResponse } from './buildings-response';
import { ROOT_URL } from './constants';


@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private http: HttpClient) { }

  getBuildings(): Building[] {
    return BUILDINGS;
  }

  getOneBuildingOfEachType(array: Building[], comp: string) {
    const unique = array
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => array[e])
    .map(e => array[e]);
    return unique;
  }

  getBuildingsFromAPI(): Observable<BuildingsResponse> {
    return this.http.get<BuildingsResponse>(ROOT_URL + '/kingdom/buildings');
  }
}
