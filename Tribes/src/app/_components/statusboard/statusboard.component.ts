import { SoldiersService } from './../../_services/soldiers.service';
import { Soldier } from '../../_models/soldier';
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

  constructor(private buildingService: BuildingService, private soldiersService: SoldiersService) { }

  ngOnInit() {
    this.getListOfBuildings();
    this.getListOfSoldiers();
  }

  getListOfBuildings() {
    this.buildingService.getBuildingsFromAPI().subscribe(response => this.listOfBuildings = response.buildings);
  }

  getListOfSoldiers() {
    this.soldiersService.getSoldiersFromAPI().subscribe(response => this.listOfSoldiers = response.soldiers);
  }

}
