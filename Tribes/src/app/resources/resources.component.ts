import { ResourceResponse } from '../resource-response';
import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';
import { Resource} from './../resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources: Resource[];

  constructor(private resourceService: ResourceService) {
    this.getResources();
  }

  ngOnInit() {
   this.getResources();
  }

  getResources() {
    this.resourceService.getDataFromBackend().subscribe(response => this.resources = response.resources);
  }
}
