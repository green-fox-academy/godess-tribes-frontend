import { BuildingsResponse } from './../_models/buildings-response';
import { BuildingService } from './building.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Notification } from './../_models/notification';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notification: Notification;
  private notifications: Notification[];

  constructor(private http: HttpClient, private buildingService: BuildingService) { }

  getNotification(): Notification[] {
    return this.notifications;
  }

  getBuildingsFromAPI(): Observable<BuildingsResponse> {
    return this.buildingService.getBuildingsFromAPI();
  }
}
