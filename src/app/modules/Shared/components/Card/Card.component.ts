import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Message } from '../../../../data/Message';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.scss']
})
export class CardComponent implements OnInit {

  showData = false;
  messageValues: Message[];
  @Input() set messages(values: Message[]) {
    this.messageValues = values;
    console.log(values);
    this.showData = true;
  }
  get messages(): Message[] {
    return this.messageValues;
  }
  constructor(
      private dataService: GetDataService,
      private dataTranserService: DataTransferService
    ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (!this.messageValues == null)
    {
      this.showData = true;
    }
    else {
      this.showData = false;
    }

    this.dataTranserService.msgChange$.subscribe( data => {
      this.messageValues = data;
    });
  }

  getDataItem(messageID: number): void {
      this.dataService.GetContent(messageID).subscribe( data => {
      this.dataTranserService.addToInventory(data);
    });
  }

}
