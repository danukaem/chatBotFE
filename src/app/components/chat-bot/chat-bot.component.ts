import {Component, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('msg') msg;

  chatMessageContentList: { chatMember: string, chatMessage: string, time: string }[] = [];

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
    this.chatScrollBottom();
    this.getAllMessagesByUser();
  }

  chatScrollBottom() {
    setTimeout(() => {
      const messageContent = document.getElementById('message_content');
      if (messageContent != null) {
        messageContent.scrollTop = messageContent.scrollHeight;
      }
    }, 2);

  }

  getAllMessagesByUser() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    this.http.get<any>(`${this.resourceBaseURL}` + 'chatMessage/getChatMessageList?'
      + '&userId=' + (this.ipService.getUserId() === undefined ? '' : this.ipService.getUserId()), {
      observe: 'response',
      headers
    }).subscribe(response => {
      if (response.body == null) {
        alert('message empty');
      } else {
        this.chatMessageContentList = response.body;
        this.chatScrollBottom();
        this.msg.nativeElement.value = '';
      }
    }, error => {
      console.log(error);
      alert('error in server');
      this.msg.nativeElement.value = '';

    });
  }

  sendMessage(message: string) {
    if (message !== '') {
      this.userMessage = message;
      const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
      this.http.get<any>(`${this.resourceBaseURL}` + 'chatMessage/chat?chatMessage=' + message + '&chatSessionId=' + this.ipService.getIpAddress()
        + '&userId=' + (this.ipService.getUserId() === undefined ? '' : this.ipService.getUserId()), {
        observe: 'response',
        headers
      }).subscribe(response => {
        if (response.body == null) {
          alert('message empty');
        } else {
          this.chatMessageContentList = response.body;
          this.chatScrollBottom();
          this.msg.nativeElement.value = '';
        }
      }, error => {
        console.log(error);
        alert('error 2');
        this.msg.nativeElement.value = '';

      });
    }
  }

  pressEnter(event: KeyboardEvent, message: any) {
    if (event.key === 'Enter') {
      this.sendMessage(message);

      this.msg.nativeElement.value = '';
    }
  }
}
