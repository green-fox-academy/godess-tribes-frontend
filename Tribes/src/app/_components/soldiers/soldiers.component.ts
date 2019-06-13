import { MAX_UPGRADE_LEVELS, COST_BASE_UPGRADE } from './../../constants';
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

  constructor(private soldiersService: SoldiersService) {
    this.soldiersService.finishConstruction.subscribe({
      next: () => {
          this.getSoldiersByLevel();
      }
    });
   }

  ngOnInit() {
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
    return COST_BASE_UPGRADE * level;
  }

}
