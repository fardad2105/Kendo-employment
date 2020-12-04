import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Content } from '../../../../data/Content';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {


  contentData: Content;

  constructor(private dataTransferService: DataTransferService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataTransferService.inventoryChanged$.subscribe( data => {
      this.contentData = data;
    });
  }

}
