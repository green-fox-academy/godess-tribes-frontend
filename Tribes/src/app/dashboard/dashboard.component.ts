import { BuildingService } from './../building.service';
import { Building } from './../building';
import { MainIconService } from './../main-icon.service';
import { MainIcon } from './../main-icon';
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
    this.getBuildings();
  }

  getBuildings(): void {
    this.buildings = this.buildingService.getBuildings();
  }

}
