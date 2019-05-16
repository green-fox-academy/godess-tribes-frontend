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

  getBuildingByType(type: string) {
    return BUILDINGS.find(building => building.type === type);
  }

  getBuildingById(id: number) {
    return BUILDINGS.find(building => building.id === id);
  }
}
