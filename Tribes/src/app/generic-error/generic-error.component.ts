import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.css']
})

export class GenericErrorComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }
}
