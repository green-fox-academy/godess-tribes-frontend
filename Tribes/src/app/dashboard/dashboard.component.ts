import { BUILDINGS } from './../mock-building';
import { BuildingService } from './../building.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  buildings: Building[] = [];

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.checkNumberOfBuildingsByType('farm');
  }

  // getBuildings(): void {
  //   this.buildings = this.buildingService.getOneBuildingOfEachType(BUILDINGS, 'type');
  // }

  checkNumberOfBuildingsByType(buildingtype: string): number {
    this.buildings = this.buildingService.getBuildingsByType(buildingtype);
    return this.buildings.length;
  }

  numberOfFarms = this.checkNumberOfBuildingsByType('farm');
  numberOfMines = this.checkNumberOfBuildingsByType('mine');
  numberOfBarracks = this.checkNumberOfBuildingsByType('barrack');

}
