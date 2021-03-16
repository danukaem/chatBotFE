import {Component, OnInit} from '@angular/core';
import {IpServiceService} from '../../ip-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  userMessage: string;
  robotMessage: string;

  chatServiceURL: string;
  resourceBaseURL: string;
  isVisibleChat: boolean;

  constructor(private http: HttpClient, private ipService: IpServiceService) {
    this.chatServiceURL = environment.chatServiceURL;
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    this.userMessage = '';
    this.robotMessage = 'Hey!, how can i help you?';
    this.isVisibleChat = false;
  }


  openChatBot() {
    this.isVisibleChat = !this.isVisibleChat;
    console.log('isVisibleChat ----  ' + this.isVisibleChat);

  }

  sendMessage() {

    console.log('this.userMessage ----- ' + this.userMessage)
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'chatMessage/chat?chatMessage=' + this.userMessage + '&chatSessionId=' + this.ipService.getSessionId()
      + '&userId=' + (this.ipService.getUserId() === undefined ? '' : this.ipService.getUserId()) + '&ipAddress=' + (this.ipService.getIpAddress() === undefined ? '' : this.ipService.getIpAddress())
      + '&orderId=' + (this.ipService.getOrderId() === undefined ? '' : this.ipService.getOrderId()) + '&stateOfOrder=' + (this.ipService.getStateOfOrder() === undefined ? 'PENDING' : this.ipService.getStateOfOrder())
      + '&cartId=' + (this.ipService.getCartId() === undefined ? '' : this.ipService.getCartId()), {
      observe: 'response',
      headers
    }).subscribe(response => {
      console.log(response.body);
      if (response.body.userMessage == null) {
        alert('message null');

      } else {

        this.robotMessage = response.body.userMessage;
      }

    }, error => {
      console.log(error);

      alert('error 2');
    });
  }
}
