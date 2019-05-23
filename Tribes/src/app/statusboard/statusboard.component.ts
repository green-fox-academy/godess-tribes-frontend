import { Soldier } from './../soldier';
import { BuildingsResponse } from './../buildings-response';
import { BuildingService } from './../building.service';
import { Component, OnInit } from '@angular/core';
import { Building} from './../building';

@Component({
  selector: 'app-statusboard',
  templateUrl: './statusboard.component.html',
  styleUrls: ['./statusboard.component.css']
})
export class StatusboardComponent implements OnInit {

  listOfBuildings: Building[] = [];
  listOfSoldiers: Soldier[];

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.getListOfBuildings();
  }

  getListOfBuildings() {
    this.buildingService.getBuildingsFromAPI().subscribe(response => this.listOfBuildings = response.buildingDTOS);
  }

}
