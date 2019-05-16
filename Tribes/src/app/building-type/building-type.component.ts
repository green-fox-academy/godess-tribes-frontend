import { BuildingService } from './../building.service';
import { Building } from './../building';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-building-type',
  templateUrl: './building-type.component.html',
  styleUrls: ['./building-type.component.css']
})
export class BuildingTypeComponent implements OnInit {

  building: Building;

  constructor(
    private route: ActivatedRoute,
    private buildingService: BuildingService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBuilding();
  }

  getBuilding(): void {
    const type = this.route.snapshot.paramMap.get('type');
    this.building = this.buildingService.getBuilding(type);
  }

}
