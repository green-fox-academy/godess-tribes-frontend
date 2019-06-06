import { ResourceResponse } from '../resource-response';
import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';
import { Resource} from './../resource';
import { BuildingService } from './../building.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];

  constructor(private resourceService: ResourceService, private buildingService: BuildingService) {
    this.buildingService.beginConstruction.subscribe({
      next: () => {
          this.getResources();
      }
    });
    this.buildingService.finishConstruction.subscribe({
      next: () => {
          this.getResources();
      }
    });
  }

  ngOnInit() {
   this.getResources();
  }

  getResources() {
    this.resourceService.getDataFromBackend().subscribe(response => this.resources = response.resources);
  }
}
