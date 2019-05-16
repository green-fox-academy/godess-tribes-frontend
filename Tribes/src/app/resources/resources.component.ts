import { ResourceResponse } from './../resourceResponse';
import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: ResourceResponse;
  //   resources = [
  //     { amount: 523, generation: 15, type: ResourceType.Food },
  //     { amount : 1256, generation: 5, type: ResourceType.Gold }
  // ];

  constructor(private resourceService: ResourceService) {
    this.getResources;
  }

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.resourceService.getDataFromBackend().subscribe(response=> this.resources = response.resources);
  }
}
