import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageType } from 'src/app/data/MessageType';
import { GetDataService } from 'src/app/services/get-data.service';

interface CatMessages {
  id: number;
  title: string;
  displayTitle: string;
  count: number;
}
@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent implements OnInit {
  messageType: MessageType[];
  count = 0;
  catMessage: CatMessages[];
  CatCount: number [] = [0, 0, 0];
  selectedValue = 1;

  @Output() exitCatId = new EventEmitter<number>();

  constructor(private dataService: GetDataService ) { }
  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.dataService.GetMessagesCategory().subscribe(data => {
      this.messageType = data;
    });

    this.dataService.GetMessageData().subscribe( data => {
      this.count = data.length;
    });

    this.getNumbersOfDataCategory();
  }

  getNumbersOfDataCategory(): void {
    this.dataService.GetMessageData()
        .pipe(
          map( data => {
            return data.map(item => {
               if (item.messageCategoryID === 1) {
                  this.CatCount[0] ++;
               } else if (item.messageCategoryID === 2) {
                 this.CatCount[1] ++ ;
               } else {
                 this.CatCount[2] ++;
               }
            });
          })
        ).subscribe( data => {
          console.log(this.CatCount);
        });


  }

  CatId(value: number): void {
    this.exitCatId.emit(value);
    console.log('Val: ' + value);
  }
}
