import { BuildingsResponse } from './../_models/buildings-response';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_URL, CONSTRUCTION_TIME } from './../constants';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
import { Building } from '../_models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  public beginConstruction: EventEmitter<any> = new EventEmitter();
  public finishConstruction: EventEmitter<any> = new EventEmitter();
  interval;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getBuildingsFromAPI(): Observable<BuildingsResponse> {
    return this.http.get<BuildingsResponse>(ROOT_URL + '/kingdom/buildings');
  }

  addNewBuilding(type: string): void {
    this.http.post<Building>(ROOT_URL + '/kingdom/buildings', {type})
    .pipe(catchError(this.errorHandlingService.handleError))
    .subscribe(response => this.handleBuildingProcess(response),
              error => console.error(error));
  }

  handleBuildingProcess(building: Building) {
    this.beginConstruction.emit();
    setTimeout(() => {this.finishConstruction.emit(); }, building.finishedAt - building.startedAt);
  }
}
