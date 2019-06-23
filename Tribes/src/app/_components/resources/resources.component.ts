import { ResourceResponse } from '../../_models/resource-response';
import { ResourceService } from '../../_services/resource.service';
import { Component, OnInit } from '@angular/core';
import { Resource} from '../../_models/resource';
import { BuildingService } from '../../_services/building.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];
  goldAmount: number;

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
    this.buildingService.updateRessourceByConstruction.subscribe({
      next: (upgradeCost) => {
        this.updateRessourceAfterConstruction(upgradeCost);
      }
    });
  }

  ngOnInit() {
   this.getResources();
  }

  getResources() {
    this.resourceService.getDataFromBackend()
      .subscribe(response => { this.resources = response.resources;
                               this.goldAmount = response.resources.find(resource => resource.type === 'GOLD').amount;
                             });
  }

  updateRessourceAfterConstruction(upgradeCost: number): void {
    this.goldAmount -= upgradeCost;
  }
}
