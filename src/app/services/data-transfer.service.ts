import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from '../data/Content';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  messageDetail: Content = {
    messageID: 0,
    messageTitle: '',
    messageBodyTitle: '',
    messgeBodyText: '',
    messgeBodySignature: '',
    sentTime: ''
  };

  private inventorySubject$ = new BehaviorSubject<Content>(this.messageDetail);
  inventoryChanged$ = this.inventorySubject$.asObservable();
  constructor() { }

  addToInventory(contetn: Content): void {
    console.log(contetn);
    this.messageDetail = contetn;
    this.inventorySubject$.next(contetn);
  }

  // removeItem(): void {
  //   this.inventorySubject$.
  // }
}
