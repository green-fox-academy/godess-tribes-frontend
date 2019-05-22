import { COST_NEW_BUILDING } from './../constants';
import { ResourceType } from './../enums_resources';
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
  goldAmount: number;

  constructor(private buildingService: BuildingService,
    private resourceService: ResourceService) { }

  ngOnInit() {
    this.getGoldAmount();
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources.find(resource => resource.resourceTypeENUM === ResourceType.GOLD).amount)
  }

  checkNumberOfBuildingsByType(buildingtype: string): number {
    this.buildings = this.buildingService.getBuildingsByType(buildingtype);
    return this.buildings.length;
  }

  numberOfFarms = this.checkNumberOfBuildingsByType('farm');
  numberOfMines = this.checkNumberOfBuildingsByType('mine');
  numberOfBarracks = this.checkNumberOfBuildingsByType('barrack');

}
