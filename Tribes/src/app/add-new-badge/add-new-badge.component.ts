import { Component, OnInit } from '@angular/core';
import { COST_NEW_BUILDING } from './../constants';

import { ResourceService } from './../resource.service';

@Component({
  selector: 'app-add-new-badge',
  templateUrl: './add-new-badge.component.html',
  styleUrls: ['./add-new-badge.component.css']
})
export class AddNewBadgeComponent implements OnInit {

  goldAmount: number;
  costOfNewBuilding = COST_NEW_BUILDING;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getGoldAmount();
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources
      .find(resource => resource.type === 'GOLD').amount);
  }
}
