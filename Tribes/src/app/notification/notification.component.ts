import { NotificationService } from './../notification.service';
import { Component, OnInit, Input } from '@angular/core';
import { Notification} from './../notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() notification: Notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotification();
  }

}
