import { ResourceService } from './../../_services/resource.service';
import { MAX_UPGRADE_LEVELS, COST_BASE_UPGRADE, COST_NEW_SOLDIER, COST_SOLDIER_UPGRADE } from '../../constants';
import { SoldiersService } from './../../_services/soldiers.service';
import { Soldier } from './../../_models/soldier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soldiers',
  templateUrl: './soldiers.component.html',
  styleUrls: ['./soldiers.component.css']
})
export class SoldiersComponent implements OnInit {

  soldiers: Soldier[] = [];
  levels: number[] = [];
  level: number;
  goldAmount: number;
  costNewSoldier = COST_NEW_SOLDIER;

  constructor(private soldiersService: SoldiersService, private resourceService: ResourceService) {
    this.soldiersService.finishConstruction.subscribe({
      next: () => {
          this.getSoldiersByLevel();
      }
    });
   }

  ngOnInit() {
    this.getSoldiersByLevel();
    this.createLevelArray();
    this.getGoldAmount();

  }

  getSoldiersByLevel() {
    this.soldiersService.getSoldiersFromAPI()
    .subscribe(response => this.soldiers = response.soldiers);
  }

  getNumberOfSoldiersByLevel(level: number): number {
    return this.soldiers.filter(soldier => soldier.level === level).length;
  }

  createLevelArray(): void {
    for (let i = 1; i <= MAX_UPGRADE_LEVELS; i++) {
      this.levels.push(i);
    }
  }

  getUpgradingCost(level: number): number {
    return COST_SOLDIER_UPGRADE * level;
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources.find(resource => resource.type === 'GOLD').amount);
  }

  isUpgradePossible(level: number): boolean {
    return this.getNumberOfSoldiersByLevel(level) !== 0 && this.goldAmount >= this.getUpgradingCost(level);
  }

}
