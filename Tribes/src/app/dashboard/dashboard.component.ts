import { BuildingsResponse } from '../buildings-response';
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
  numberOfFarms: number;
  numberOfMines: number;
  numberOfBarracks: number;

  constructor(private buildingService: BuildingService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.getNumberOfFarms();
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
