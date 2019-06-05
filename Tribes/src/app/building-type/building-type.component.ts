import { BuildingService } from './../building.service';
import { ResourceService } from './../resource.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MAX_UPGRADE_LEVELS, PRODUCTION_RATE, COST_NEW_BUILDING, COST_BASE_UPGRADE,
        TOWNHALL_FOOD_CAPACITY, TOWNHALL_GOLD_CAPACITY } from '../constants';
import { ResourceType } from '../enums_resources';

@Component({
  selector: 'app-building-type',
  templateUrl: './building-type.component.html',
  styleUrls: ['./building-type.component.css']
})
export class BuildingTypeComponent implements OnInit {

  buildings: Building[] = [];
  levels: number[] = [];
  type: string;
  maxLevel = MAX_UPGRADE_LEVELS;
  costNewBuilding = COST_NEW_BUILDING;
  townhallLevel: number;
  havingEnoughResourse: boolean;
  goldAmount: number;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private location: Location,
    private resourceService: ResourceService,
  ) {
    this.buildingService.finishConstruction.subscribe({
      next: () => {
          this.getBuildingsByType();
      }
    });
   }

  ngOnInit() {
    this.getBuildingsByType();
    this.createLevelArray();
    this.getTownhallLevel();
    this.getGoldAmount();
  }

  getBuildingsByType() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.buildings = response.buildings
                            .filter(building => building.type === this.type.toUpperCase()));
  }

  getTownhallLevel(): void {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.townhallLevel = response.buildings
                            .find(building => building.type === 'TOWNHALL').level);
  }

  createLevelArray(): void {
    for (let i = 1; i <= MAX_UPGRADE_LEVELS; i++) {
      this.levels.push(i);
    }
  }

  getNumberOfBuildingsByLevel(level: number): number {
    return this.buildings.filter(building => building.level === level).length;
  }

  getProductionRate(level: number): number {
    return PRODUCTION_RATE * level;
  }

  getUpgradingCost(level: number): number {
    return COST_BASE_UPGRADE * level;
  }

  getGoldAmount() {
    this.resourceService.getDataFromBackend()
    .subscribe(response => this.goldAmount = response.resources.find(resource => resource.type === 'GOLD').amount);
  }

  getTownhallFoodCapacity(level: number): number {
    return TOWNHALL_FOOD_CAPACITY * level;
  }

  getTownhallGoldCapacity(level: number): number {
    return TOWNHALL_GOLD_CAPACITY * level;
  }

  addNewBuilding() {
    if (this.goldAmount > COST_NEW_BUILDING) {
      this.buildingService.addNewBuilding(this.type);
    } else {
      this.errorMessage =  'You do not have enough money.';
    }
  }
}
