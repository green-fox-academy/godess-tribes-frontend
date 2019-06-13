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

  public finishConstruction: EventEmitter<any> = new EventEmitter();
  public beginConstruction: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getSoldiersFromAPI(): Observable<SoldierResponse> {
    return this.http.get<SoldierResponse>(ROOT_URL + '/kingdom/soldiers');
  }

}
