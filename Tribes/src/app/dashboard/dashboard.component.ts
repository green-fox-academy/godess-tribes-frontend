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
  errorMessage: string;

  constructor(private buildingService: BuildingService, private resourceService: ResourceService) {
    this.buildingService.finishConstruction.subscribe({
      next: () => {
          this.getNumberOfFarms();
          this.getNumberOfMines();
          this.getNumberOfBarracks();
      }
    });
   }

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
    .subscribe(response => this.numberOfFarms = response.buildings
      .filter(building => building.type === 'FARM').length);
  }

  getNumberOfMines() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfMines = response.buildings
      .filter(building => building.type === 'MINE').length);
  }

  getNumberOfBarracks() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfBarracks = response.buildings
      .filter(building => building.type === 'BARRACK').length);
  }

  receiveErrorMessage($event) {
    this.errorMessage = $event;
  }
}
