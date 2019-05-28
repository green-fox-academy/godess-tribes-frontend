import { BuildingsResponse } from '../buildings-response';
import { COST_NEW_BUILDING } from './../constants';
import { ResourceType } from './../enums_resources';
import { Component, OnInit } from '@angular/core';
import { BuildingService } from './../building.service';
import { ResourceService } from './../resource.service';
import { ResourceResponse } from './../resource-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  buildings: BuildingsResponse;
  resources: ResourceResponse;
  goldAmount: number;
  costOfNewBuilding = COST_NEW_BUILDING;
  numberOfFarms = 0;
  numberOfMines: number;
  numberOfBarracks: number;

  constructor(private buildingService: BuildingService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.getGoldAmount();
 //   this.getNumberOfFarms();
    this.getNumberOfMines();
    this.getNumberOfBarracks();
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources
      .find(resource => resource.type === 'GOLD').amount);
  }

  getNumberOfFarms() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfFarms = response.buildingDTOS
      .filter(building => building.buildingTypeENUM === 'FARM').length);
  }

  getNumberOfMines() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfMines = response.buildingDTOS
      .filter(building => building.buildingTypeENUM === 'MINE').length);
  }

  getNumberOfBarracks() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfBarracks = response.buildingDTOS
      .filter(building => building.buildingTypeENUM === 'BARRACK').length);
  }
}
