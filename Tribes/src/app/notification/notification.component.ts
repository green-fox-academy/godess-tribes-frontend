import { NOTIFICATIONS } from './../notification-list-mock';
import { Component, OnInit } from '@angular/core';
import { Notification} from './../notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  buildingList = NOTIFICATIONS;

  constructor() { }

  ngOnInit() {
  }

}
