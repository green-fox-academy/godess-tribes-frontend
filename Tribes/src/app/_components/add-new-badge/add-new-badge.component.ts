import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COST_NEW_BUILDING } from '../../constants';
import { COST_NEW_SOLDIER } from './../../constants';
import { Soldier} from '../../_models/soldier';

import { ResourceService } from '../../_services/resource.service';
import { BuildingService } from '../../_services/building.service';
import { SoldiersService } from './../../_services/soldiers.service';

@Component({
  selector: 'app-add-new-badge',
  templateUrl: './add-new-badge.component.html',
  styleUrls: ['./add-new-badge.component.css']
})
export class AddNewBadgeComponent implements OnInit {

  goldAmount: number;
  costOfNewBuilding = COST_NEW_BUILDING;
  soldier: Soldier;
  @Input() type: string;
  @Output() errorMessageEvent = new EventEmitter<string>();
  costOfNewSoldier = COST_NEW_SOLDIER;
  numberOfBarracks: number;

  constructor(private resourceService: ResourceService, private buildingService: BuildingService, private soldiersService: SoldiersService) {
    this.buildingService.beginConstruction.subscribe({
      next: () => {
          this.getGoldAmount();
      }
    });
    this.soldiersService.beginTraining.subscribe({
      next: () => {
          this.getGoldAmount();
          this.getNumberOfBarracks();
      }
    });
   }

  ngOnInit() {
    this.getGoldAmount();
    this.getNumberOfBarracks();
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources
      .find(resource => resource.type === 'GOLD').amount);
  }

  addNewBuilding() {
    if (this.goldAmount > COST_NEW_BUILDING) {
      this.buildingService.addNewBuilding(this.type);
    } else {
      this.errorMessageEvent.emit('You do not have enough money.');
    }
  }

  getNumberOfBarracks() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfBarracks = response.buildings
      .filter(building => building.type === 'BARRACK').length);
  }

  addNewSoldier() {
    if (this.goldAmount > COST_NEW_SOLDIER) {
      this.soldiersService.addNewSoldier(this.soldier);
    } else {
      this.errorMessageEvent.emit('You do not have enough money.');
    }
  }
}
