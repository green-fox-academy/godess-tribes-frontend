import { Component, OnInit, Input } from '@angular/core';
import { Notification} from './../notification';
import { BUILDINGS } from '../mock-building';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() notification: Notification;

  constructor() { }

  ngOnInit() {
  }

}
