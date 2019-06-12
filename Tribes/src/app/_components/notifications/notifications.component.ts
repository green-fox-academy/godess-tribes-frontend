import { NotificationService } from '../../_services/notification.service';
import { MAX_UPGRADE_LEVELS } from '../../constants';
import { BuildingService } from '../../_services/building.service';
import { Component, OnInit } from '@angular/core';
import { BUILDINGS } from '../../_mocks/mock-building';
import { Notification } from '../../_models/notification';
import { Building } from '../../_models/building';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  listToDisplay: Notification[];
  constructor(private buildingService: BuildingService, private notificationService: NotificationService) {
    this.buildingService.beginConstruction.subscribe({
      next: () => {
          this.generateListToDisplay();
      }
    });
    this.buildingService.finishConstruction.subscribe({
      next: () => {
          console.log('vége');
          this.generateListToDisplay();
      }
    });
   }

  ngOnInit() {
    this.generateListToDisplay();
  }

  createNotification(building: Building): Notification {
    if (building.level === 0) {
      return new Notification(building.type, building.level, 'Under construction', building.startedAt, building.finishedAt);
    } else if (building.level > 0 && building.level < MAX_UPGRADE_LEVELS) {
      return new Notification(building.type, building.level, 'Leveling up from '
      + building.level + ' to ' + (building.level + 1), building.startedAt, building.finishedAt);
    }
  }

  generateListToDisplay(): void {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.listToDisplay = response.buildings
      .filter(building => this.buildingService.checkIfBuildingIsProgressing(building))
      .map(building => this.createNotification(building)));
  }
}
