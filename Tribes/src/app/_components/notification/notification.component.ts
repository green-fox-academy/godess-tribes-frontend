import { NotificationService } from '../../_services/notification.service';
import { Component, OnInit, Input } from '@angular/core';
import { Notification} from '../../_models/notification';
import { BUILDINGS } from '../../_mocks/mock-building';

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
