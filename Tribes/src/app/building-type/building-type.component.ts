import { BuildingService } from './../building.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MAX_UPGRADE_LEVELS } from '../constants';
import { PRODUCTION_RATE} from '../constants';
import { COST_NEW_BUILDING } from '../constants';
import { COST_BASE_UPGRADE } from '../constants';

@Component({
  selector: 'app-building-type',
  templateUrl: './building-type.component.html',
  styleUrls: ['./building-type.component.css']
})
export class BuildingTypeComponent implements OnInit {

  buildings: Building[];
  levels: number[] = [];
  type: string;
  maxLevel = MAX_UPGRADE_LEVELS;
  costNewBuilding = COST_NEW_BUILDING;
  townhallLevel: number;

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBuildingsByType();
    this.createLevelArray();
    this.getTownhallLevel();
  }

  getBuildingsByType(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.buildings = this.buildingService.getBuildingsbyType(this.type);
  }

  createLevelArray(): void {
    for(let i: number = 1; i <= MAX_UPGRADE_LEVELS; i++) {
      this.levels.push(i);
    }
  }

  getTownhallLevel(): void {
    this.townhallLevel = this.buildingService.getTownhallLevel();
  }

  getNumberOfBuildingsByLevel(level: number): number {
    return this.buildings.filter(building => building.level === level).length;
  }

  getProductionRate(level: number): number{
    return PRODUCTION_RATE*level;
  }

  getUpgardeingcost(level: number): number{
    return COST_BASE_UPGRADE*level;
  }
}
