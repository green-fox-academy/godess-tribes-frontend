import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COST_NEW_BUILDING } from '../../constants';

import { ResourceService } from '../../_services/resource.service';
import { BuildingService } from '../../_services/building.service';

@Component({
  selector: 'app-add-new-badge',
  templateUrl: './add-new-badge.component.html',
  styleUrls: ['./add-new-badge.component.css']
})
export class AddNewBadgeComponent implements OnInit {

  goldAmount: number;
  costOfNewBuilding = COST_NEW_BUILDING;
  @Input() type: string;
  @Output() errorMessageEvent = new EventEmitter<string>();

  constructor(private resourceService: ResourceService, private buildingService: BuildingService) {
    this.buildingService.beginConstruction.subscribe({
      next: () => {
          this.getGoldAmount();
      }
    });
   }

  ngOnInit() {
    this.getGoldAmount();
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources
      .find(resource => resource.type === 'GOLD').amount);
  }

  addNewBuilding() {
    if (this.goldAmount >= COST_NEW_BUILDING) {
      this.goldAmount = this.goldAmount - COST_NEW_BUILDING;
      this.buildingService.addNewBuilding(this.type);
    } else {
      this.errorMessageEvent.emit('You don\'t have enough money to buy a new ' + this.type);
    }
  }
}
