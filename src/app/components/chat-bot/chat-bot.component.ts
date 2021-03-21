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

  }

  sendMessage(message: string) {
    if (message !== '') {
      this.userMessage = message;
      const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
      this.http.get<any>(`${this.resourceBaseURL}` + 'chatMessage/chat?chatMessage=' + message + '&chatSessionId=' + this.ipService.getIpAddress()
        + '&userId=' + (this.ipService.getUserId() === undefined ? '' : this.ipService.getUserId()) + '&ipAddress=' + (this.ipService.getIpAddress() === undefined ? '' : this.ipService.getIpAddress())
        + '&orderId=' + (this.ipService.getOrderId() === undefined ? '' : this.ipService.getOrderId()) + '&stateOfOrder=' + (this.ipService.getStateOfOrder() === undefined ? 'PENDING' : this.ipService.getStateOfOrder())
        + '&cartId=' + (this.ipService.getCartId() === undefined ? '' : this.ipService.getCartId()), {
        observe: 'response',
        headers
      }).subscribe(response => {
        if (response.body.robotMessage == null) {
          alert('message null');
        } else {
          this.robotMessage = response.body.robotMessage;
          this.msg.nativeElement.value = '';
          this.ipService.getRecommendItemList()
            .subscribe(responseItem => {
              this.ipService.recommendedItemsList = responseItem.body;
            }, error => {
              console.log(error);
              alert('error ');
            });

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
