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
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }


  openChatBot() {
    this.isVisibleChat = !this.isVisibleChat;
  }

  sendMessage() {

    console.log(this.userMessage)
    console.log(this.ipService.getSessionId())
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    // this.http.get<any>(`${this.chatServiceURL}` + 'chat?message=' + this.userMessage, {
    this.http.get<any>(`${this.resourceBaseURL}` + 'chatMessage/chat?message=' + this.userMessage + '&sessionId=' + this.ipService.getSessionId(), {
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
