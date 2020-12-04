import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Content } from '../../../../data/Content';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  contentData: Content ;

  constructor(private dataTransferService: DataTransferService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataTransferService.inventoryChanged$.subscribe( data => {
      console.log(data.messgeBodyText);
      this.contentData = data;
    });
  }

}
