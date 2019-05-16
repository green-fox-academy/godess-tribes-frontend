import { BUILDINGS } from './mock-building';
import { Building } from './building';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }

  getBuildings(): Building[] {
    return BUILDINGS;
  }

  getBuilding(type: string) {
    return BUILDINGS.find(building => building.type === type);
  }
}
