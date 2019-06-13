import { BuildingsResponse } from './../_models/buildings-response';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_URL, COST_BASE_UPGRADE, COST_NEW_BUILDING } from './../constants';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
import {SoldierResponse} from './../_models/soldiers-response';
import { Building } from '../_models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  public beginConstruction: EventEmitter<any> = new EventEmitter();
  public finishConstruction: EventEmitter<any> = new EventEmitter();
  public updateRessourceByConstruction: EventEmitter<any> = new EventEmitter();
  interval;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getBuildingsFromAPI(): Observable<BuildingsResponse> {
    return this.http.get<BuildingsResponse>(ROOT_URL + '/kingdom/buildings');
  }

  getSoldiersFromAPI(): Observable<SoldierResponse> {
    return this.http.get<SoldierResponse>(ROOT_URL + '/kingdom/soldiers');
  }

  addNewBuilding(type: string): void {
    this.updateRessourceByConstruction.emit(COST_NEW_BUILDING);
    this.http.post<Building>(ROOT_URL + '/kingdom/buildings', {type})
    .pipe(catchError(this.errorHandlingService.handleError))
    .subscribe(response => this.handleBuildingProcess(response),
              error => console.error(error));
  }

  handleBuildingProcess(building: Building): void {
    this.beginConstruction.emit();
    localStorage.setItem('finishedAt' + building.id, building.finishedAt.toString());
    setTimeout(() => { this.finishConstruction.emit(); }, building.finishedAt - building.startedAt);
  }

  upgradeBuilding(idToUpgrade: number, level: number): void {
    this.updateRessourceByConstruction.emit(COST_BASE_UPGRADE * (level - 1));
    this.http.put<Building>(ROOT_URL + '/kingdom/buildings/' + idToUpgrade, { level })
    .pipe(catchError(this.errorHandlingService.handleError))
    .subscribe(response => this.handleBuildingProcess(response),
              error => console.error(error));
  }

  checkIfBuildingIsProgressing(building: Building): boolean {
    const currentTime = new Date().getTime();
    return currentTime <= building.finishedAt;
  }

  setTimeoutsAgain() {
    if (localStorage.length > 1) {
      for (let i = 0; i < localStorage.length; i++) {
        let key: string = localStorage.key(i);
        if (key !== 'TOKEN') {
          let finishedAt: number = +localStorage.getItem(key);
          let now = new Date().getTime();
          if (finishedAt < now) {
            localStorage.removeItem(key);
          } else {
            setTimeout(() => { this.finishConstruction.emit();
                               localStorage.removeItem(key) }, finishedAt - now);
          }
        }
      }
    }
  }
}
