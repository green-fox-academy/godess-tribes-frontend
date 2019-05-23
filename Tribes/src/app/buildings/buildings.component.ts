import { BuildingService } from './../building.service';
import { Component, OnInit } from '@angular/core';
import { BuildingsResponse } from '../buildings-response';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildings: BuildingsResponse;

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.getBuildings();
  }

  getBuildings(): void {
    this.buildingService.getBuildingsFromAPI().subscribe(response => this.buildings.buildingDTOS = response.buildingDTOS);
  }

}
