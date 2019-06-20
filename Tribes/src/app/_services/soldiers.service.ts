import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ROOT_URL, CONSTRUCTION_TIME } from './../constants';
import { SoldierResponse } from './../_models/soldiers-response';
import { Injectable, EventEmitter } from '@angular/core';
import { Soldier } from './../_models/soldier';

@Injectable({
  providedIn: 'root'
})
export class SoldiersService {

  public finishTraining: EventEmitter<any> = new EventEmitter();
  public beginTraining: EventEmitter<any> = new EventEmitter();
  interval;

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) { }

  getSoldiersFromAPI(): Observable<SoldierResponse> {
    return this.http.get<SoldierResponse>(ROOT_URL + '/kingdom/soldiers');
  }

  addNewSoldier(soldier: Soldier): void {
    this.http.post<Soldier>(ROOT_URL + '/kingdom/soldiers', {soldier})
      .pipe(catchError(this.errorHandlingService.handleError))
        .subscribe(response => this.handleTrainingProcess(response),
              error => console.error(error));
  }

  handleTrainingProcess(soldier: Soldier) {
    this.beginTraining.emit();
    setTimeout(() => {this.finishTraining.emit(); }, soldier.finishedAt - soldier.startedAt);
  }

}
