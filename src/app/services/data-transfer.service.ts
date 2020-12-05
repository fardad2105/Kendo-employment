import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from '../data/Content';
import { Message } from '../data/Message';
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

   message: Message[] = [];

  private inventorySubject$ = new BehaviorSubject<Content>(this.messageDetail);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  private msgSubject$ = new BehaviorSubject<Message[]>(this.message);
  msgChange$ = this.msgSubject$.asObservable();
  constructor() { }

  addToInventory(contetn: Content): void {
    console.log(contetn);
    this.messageDetail = contetn;
    this.inventorySubject$.next(contetn);
  }

  addToCategory(msg: Message[]): void {
    this.message =  msg;
    this.msgSubject$.next(msg);
  }

  // removeItem(): void {
  //   this.inventorySubject$.
  // }
}
