import { SoldiersService } from '../../_services/soldiers.service'
import { BuildingsResponse } from '../../_models/buildings-response';
import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../_services/building.service';
import { ResourceService } from '../../_services/resource.service';
import { ResourceResponse } from '../../_models/resource-response';

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
  numberOfSoldiers: number;
  errorMessage: string;

  constructor(private buildingService: BuildingService, private resourceService: ResourceService, private soldierService: SoldiersService) {
    this.buildingService.finishConstruction.subscribe({
      next: () => {
          this.getNumberOfFarms();
          this.getNumberOfMines();
          this.getNumberOfBarracks();
          this.getNumberOfSoldiers();
      }
    });
   }

  ngOnInit() {
    this.getNumberOfFarms();
    this.getNumberOfMines();
    this.getNumberOfBarracks();
    this.getNumberOfSoldiers();
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources
      .find(resource => resource.type === 'GOLD').amount);
  }

  getNumberOfFarms() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfFarms = response.buildings
      .filter(building => building.type === 'FARM' && building.level !== 0 ).length);
  }

  getNumberOfMines() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfMines = response.buildings
      .filter(building => building.type === 'MINE' && building.level !== 0).length);
  }

  getNumberOfBarracks() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfBarracks = response.buildings
      .filter(building => building.type === 'BARRACK' && building.level !== 0).length);
  }

  getNumberOfSoldiers() {
    this.soldierService.getSoldiersFromAPI()
    .subscribe(response => this.numberOfSoldiers = response.soldiers.length);
  }

  receiveErrorMessage($event) {
    this.errorMessage = $event;
  }
}
