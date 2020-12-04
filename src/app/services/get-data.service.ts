import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../data/server-config';
import { Observable } from 'rxjs';
import { Message } from '../data/Message';
import { MessageType } from '../data/MessageType';
import { Content } from '../data/Content';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public baseUrl = baseUrl;
  constructor(private http: HttpClient) { }

  public GetMessageData(): Observable<Message[]> {
    console.log('GetMessageData Method');
    console.log(this.baseUrl + `GetListMessage`);
    return this.http.get<Message[]>(
      `https://stage.hrcando.ir/api/test/GetListMessage`
     );
  }

  public GetMessagesCategory(): Observable<MessageType[]> {
    return this.http.get<MessageType[]> (
      `https://stage.hrcando.ir/api/test/GetListMessagesCategory`
    );
  }

  public GetContent(messageID: number): Observable<Content> {
    return this.http.get<Content> (
      `https://stage.hrcando.ir/api/test/GetMessage/${messageID}`
    );
  }
}
