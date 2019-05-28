import { BuildingService } from './../building.service';
import { Component, OnInit } from '@angular/core';
import { BUILDINGS } from './../mock-building';
import { Notification } from '../notification';
import { Building } from './../building';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  listToDisplay: Notification[];
  results: Building[];

  constructor() { }

  ngOnInit() {
    this.generateListToDisplay();
  }

  checkIfBuildingIsProgressing(building: Building): boolean {
    let currentTime = new Date;
    let pardedFinishedAt = new Date(building.finishedAt);
    // let timeDiff: any = currentTime - pardedFinishedAt;
    return currentTime >= pardedFinishedAt;
  }

  generateListToDisplay(): void {
    this.results = BUILDINGS.filter(building => this.checkIfBuildingIsProgressing(building));

  }

}
