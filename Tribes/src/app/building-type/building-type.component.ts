import { BuildingService } from './../building.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MAX_UPGRADE_LEVELS } from '../constants';

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

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBuildingsByType();
    this.createLevelArray();
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

  getNumberOfBuildingsByLevel(level): number {
    return this.buildings.filter(building => building.level === level).length;

  }
}
