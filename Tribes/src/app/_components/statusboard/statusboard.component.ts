import { SoldierResponse } from '../../_models/soldiers-response';
import { Soldier } from '../../_models/soldier';
import { BuildingsResponse } from '../../_models/buildings-response';
import { BuildingService } from '../../_services/building.service';
import { Component, OnInit } from '@angular/core';
import { Building} from '../../_models/building';

@Component({
  selector: 'app-statusboard',
  templateUrl: './statusboard.component.html',
  styleUrls: ['./statusboard.component.css']
})
export class StatusboardComponent implements OnInit {

  listOfBuildings: Building[] = [];
  listOfSoldiers: Soldier[] = [];

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.getListOfBuildings();
    this.getListOfSoldiers();
  }

  getListOfBuildings() {
    this.buildingService.getBuildingsFromAPI().subscribe(response => this.listOfBuildings = response.buildings);
  }

  getListOfSoldiers() {
    this.buildingService.getSoldiersFromAPI().subscribe(response => this.listOfSoldiers = response.soldiers);
  }

}
