import { BuildingService } from './../building.service';
import { ResourceService } from './../resource.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MAX_UPGRADE_LEVELS, PRODUCTION_RATE, COST_NEW_BUILDING, COST_BASE_UPGRADE, TOWNHALL_FOOD_CAPACITY, TOWNHALL_GOLD_CAPACITY } from '../constants';
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

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private location: Location,
    private resourceService: ResourceService,
  ) { }

  ngOnInit() {
    this.getBuildingsByType();
    this.createLevelArray();
    this.getTownhallLevel();
    this.getGoldAmount();
  }

  getBuildingsByType() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.buildings = response.buildingDTOS
                            .filter(building => building.buildingTypeENUM === this.type.toUpperCase()));
  }

  getTownhallLevel(): void {
    this.buildingService.getBuildingsFromAPI()
    .subscribe(response => this.townhallLevel = response.buildingDTOS
                            .find(building => building.buildingTypeENUM === 'TOWNHALL').level);
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
}
