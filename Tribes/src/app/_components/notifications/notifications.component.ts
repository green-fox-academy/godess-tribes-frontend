import { NotificationService } from '../../_services/notification.service';
import { MAX_UPGRADE_LEVELS } from '../../constants';
import { BuildingService } from '../../_services/building.service';
import { Component, OnInit } from '@angular/core';
import { BUILDINGS } from '../../_mocks/mock-building';
import { Notification } from '../../_models/notification';
import { Building } from '../../_models/building';
import { Soldier} from '../../_models/soldier';

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

  checkIfSoldierIsProgressing(soldier: Soldier): boolean {
    const currentTime = new Date().getTime();
    const parsedFinishedAt = soldier.finishedAt;
    return currentTime < parsedFinishedAt;
  }

  createNotification(building: Building): Notification {
    if (building.level === 0) {
      return new Notification(building.type, building.level, 'Under construction', building.startedAt, building.finishedAt);
    } else if (building.level > 1 && building.level <= MAX_UPGRADE_LEVELS) {
      return new Notification(building.type, building.level, 'Leveling up from '
      + (building.level) + ' to ' + building.level + 1, building.startedAt, building.finishedAt);
    }
  }

  createNotificationSoldier(soldier: Soldier): Notification {
    if (soldier.level === 0) {
      return new Notification(soldier.type, soldier.level, 'About to join the army', soldier.startedAt, soldier.finishedAt);
    } else if (soldier.level > 1 && soldier.level <= MAX_UPGRADE_LEVELS) {
      return new Notification(soldier.type, soldier.level, 'Training from '
      + (soldier.level) + ' to ' + soldier.level + 1, soldier.startedAt, soldier.finishedAt);
    }
  }

  generateListToDisplay(): void {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.listToDisplay = response.buildings
      .filter(building => this.checkIfBuildingIsProgressing(building))
      .map(building => this.createNotification(building)));
  }
}
