import { BuildingService } from './../building.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildings: Building[] = [];

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.getBuildings;
  }

  getBuildings(): void {
    this.buildings = this.buildingService.getBuildings();
  }

}
