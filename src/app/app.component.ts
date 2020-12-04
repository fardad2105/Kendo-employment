import { Component } from '@angular/core';
import { MessageType } from './data/MessageType';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-employment';

  catID = 0;

  messageTypes: MessageType[] = [
    {id: 1, title: 'Task', displayTitle: 'وظایف من'},
    {id: 2, title: 'Notification', displayTitle: 'اعلان ها'},
    {id: 3, title: 'Request', displayTitle: 'درخواست ها'}
  ];

  getCatId(id: number): void {
    console.log('My ID:' + id);
    this.catID = id;
  }
}
