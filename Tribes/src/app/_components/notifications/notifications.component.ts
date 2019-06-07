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
          this.generateListToDisplay();
      }
    });
   }

  ngOnInit() {
    this.generateListToDisplay();
  }

  checkIfBuildingIsProgressing(building: Building): boolean {
    const currentTime = new Date().getTime();
    const parsedFinishedAt = building.finishedAt;
    return currentTime < parsedFinishedAt;
  }

  createNotification(building: Building): Notification {
    if (building.level === 1) {
      return new Notification(building.type, building.level, 'Under construction', building.startedAt, building.finishedAt);
    } else if (building.level > 1 && building.level <= MAX_UPGRADE_LEVELS) {
      return new Notification(building.type, building.level, 'Leveling up from '
      + (building.level - 1) + ' to ' + building.level, building.startedAt, building.finishedAt);
    }
  }

  generateListToDisplay(): void {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.listToDisplay = response.buildings
      .filter(building => this.checkIfBuildingIsProgressing(building))
      .map(building => this.createNotification(building)));
  }
}
