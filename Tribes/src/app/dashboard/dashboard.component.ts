import { MainIconService } from './../main-icon.service';
import { MainIcon } from './../main-icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mainIcons: MainIcon[] = [];

  constructor(private mainIconService: MainIconService) { }

  ngOnInit() {
    this.getMainIcons();
  }

  getMainIcons(): void {
    this.mainIcons = this.mainIconService.getMainIcons();
  }

}
