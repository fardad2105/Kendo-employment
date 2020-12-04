import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Message } from '../../data/Message';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnChanges {

  public message: Message[];
  @Input() catID: number;

  constructor(
    private dataService: GetDataService,
    private dataTranserService: DataTransferService
    ) { }

  ngOnInit(): void {
    this.dataService.GetMessageData().subscribe( data => {
      console.log(data);
      this.message = data;

      this.dataService.GetContent(data[0].messageID).subscribe( value => {
      this.dataTranserService.addToInventory(value);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const filterCats = this.dataService.GetMessageData().pipe(
      map(data => data.filter(val => val.messageCategoryID === this.catID))
    );

    filterCats.subscribe(data => this.message = data);
  }

}
