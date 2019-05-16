import { RESOURCES } from './../mock-resource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resources = RESOURCES;

  constructor() { }

  ngOnInit() {
  }

}
