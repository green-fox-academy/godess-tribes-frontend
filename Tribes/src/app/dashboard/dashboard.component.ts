import { Component, OnInit } from '@angular/core';
import { BUILDINGS } from './../mock-building';
import { BuildingService } from './../building.service';
import { Building } from './../building';
import { ResourceService } from './../resource.service';
import { ResourceResponse } from './../resourceResponse';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  buildings: Building[];
  resources: ResourceResponse;
  amountOfGold: number;

  constructor(private buildingService: BuildingService,
    private resourceService: ResourceService) { }

  ngOnInit() {}

  goldResourceAvailable(type: string): void {
    this.resources.resources.forEach(resource => {
      if (resource.type === 'gold'){
        this.amountOfGold === resource.amount;
      }
    });
  }

  getResources() {
    this.resourceService.getDataFromBackend().subscribe(response => this.resources.resources = response.resources);
  }

  checkNumberOfBuildingsByType(buildingtype: string): number {
    this.buildings = this.buildingService.getBuildingsByType(buildingtype);
    return this.buildings.length;
  }

  numberOfFarms = this.checkNumberOfBuildingsByType('farm');
  numberOfMines = this.checkNumberOfBuildingsByType('mine');
  numberOfBarracks = this.checkNumberOfBuildingsByType('barrack');

}
