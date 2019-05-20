import { BuildingTypeComponent } from './building-type/building-type.component';
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

  getOneBuildingOfEachType(array: Building[], comp: string) {
    const unique = array
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => array[e])
    .map(e => array[e]);
    return unique;
  }

  getBuildingById(id: number) {
    return BUILDINGS.find(building => building.id === id);
  }

  getBuildingsByType(comp: string): Building[] {
    let buildingsByType: Building[] = [];
    BUILDINGS.map(e => {
      if(e.type === comp){
        buildingsByType.push(e);
      }
    })
    return buildingsByType;
  }

}
