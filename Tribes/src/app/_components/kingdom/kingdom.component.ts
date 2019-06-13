import { Component, OnInit } from '@angular/core';
import { BuildingService } from 'src/app/_services/building.service';

@Component({
  selector: 'app-kingdom',
  templateUrl: './kingdom.component.html',
  styleUrls: ['./kingdom.component.css']
})
export class KingdomComponent implements OnInit {

  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
    this.buildingService.setTimeoutsAgain();
  }

}
