import { ResourceResponse } from './../_models/resource-response';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_URL } from './../constants';
import { share, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  resourcesData: ResourceResponse;
  resourcesObservable: Observable<ResourceResponse>;
  
  constructor(private http: HttpClient) { }

  getDataFromBackend(): Observable<ResourceResponse> {
    if (this.resourcesData) {
      return of(this.resourcesData);
    } else if (this.resourcesObservable) {
      return this.resourcesObservable;
    } else {
      this.resourcesObservable = this.http.get<ResourceResponse>(ROOT_URL + '/kingdom/resources')
      .pipe(map(response => this.resourcesData = response),
            share());
      return this.resourcesObservable;
    }
  }

  refreshResourcesFromAPI(): void {
    this.resourcesData = null;
    this.resourcesObservable = null;
  }

  updateRessourceAfterConstruction(upgradeCost: number): void {
    this.resourcesData.resources.find(resource => resource.type === 'GOLD').amount -= upgradeCost;
  }
}
