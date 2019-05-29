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
    let currentTime = new Date().getTime();
    console.log(currentTime);
    let parsedFinishedAt = building.finishedAt;
    console.log(parsedFinishedAt);
    // let timeDiff: any = currentTime - pardedFinishedAt;
    return currentTime >= parsedFinishedAt;
  }

  generateListToDisplay(): void {
    this.results = BUILDINGS.filter(building => this.checkIfBuildingIsProgressing(building));

  }

}
