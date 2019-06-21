import { BuildingService } from './../../_services/building.service';
import { ResourceService } from './../../_services/resource.service';
import { MAX_UPGRADE_LEVELS, COST_NEW_SOLDIER, COST_SOLDIER_UPGRADE } from '../../constants';
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
  goldAmount: number;
  costNewSoldier = COST_NEW_SOLDIER;
  numberOfBarracks: number;
  barrackLevel: number;
  soldierLevel: number;
  soldierId: number;

  constructor(private soldiersService: SoldiersService, private resourceService: ResourceService,
              private buildingService: BuildingService) {
      this.soldiersService.finishTraining.subscribe({
        next: () => {
          this.getSoldiersList();
        }
    });
   }

  ngOnInit() {
    this.getSoldiersList();
    this.createLevelArray();
    this.getGoldAmount();
    this.getNumberOfBarracks();
    this.getBarrackLevel();
    this.getSoldierLevel(this.soldierId);
  }

  getSoldiersList() {
    this.soldiersService.getSoldiersFromAPI().subscribe(response => this.soldiers = response.soldiers);
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
    .subscribe(response => this.goldAmount = response.resources
                            .find(resource => resource.type === 'GOLD').amount);
  }

  getNumberOfBarracks() {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.numberOfBarracks = response.buildings
                            .filter(building => building.type === 'BARRACK').length);
  }

  getNumberOfBarracksByLevel(level: number): number {
    return this.soldiers
            .filter(soldier => soldier.level === level).length;
  }

  isUpgradePossible(level: number): boolean {
    return this.getNumberOfBarracksByLevel(level) >= 1 && this.goldAmount >= this.getUpgradingCost(level);
  }

  getBarrackLevel(): void {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.barrackLevel = response.buildings
                            .find(building => building.type === 'BARRACK').level);
  }

  getSoldierLevel(id: number): number {
    this.soldiersService.getSoldiersFromAPI()
    .subscribe(response => this.soldierLevel = response.soldiers
                            .find(soldier => soldier.id === id).level);
    return this.soldierLevel;
  }

}
