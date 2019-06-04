import { BuildingsResponse } from './buildings-response';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_URL, CONSTRUCTION_TIME } from './constants';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
import {SoldierResponse} from './soldiers-response';

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

  getSoldiersFromAPI(): Observable<SoldierResponse> {
    return this.http.get<SoldierResponse>(ROOT_URL + '/kingdom/soldiers');
  }

  addNewBuilding(type: string): void {
    this.http.post(ROOT_URL + '/kingdom/buildings', {type})
    .pipe(catchError(this.errorHandlingService.handleError))
    .subscribe(response => { this.beginConstruction.emit(response);
                             setTimeout(() => { this.finishConstruction.emit(); }, 1000 * CONSTRUCTION_TIME); },
              error => console.log(error));
  }
}
