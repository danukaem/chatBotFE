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

  chatMessageSample: { chatMember: string, chatMessage: string, time: string }[] = [];

  constructor(private http: HttpClient, private ipService: IpServiceService) {
    this.chatServiceURL = environment.chatServiceURL;
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    this.userMessage = '';
    this.robotMessage = 'Hey!, how can i help you?';
    this.isVisibleChat = false;
    this.chatMessageSample.push({chatMember: 'robot', chatMessage: 'hello', time: '15.53'});
    this.chatMessageSample.push({chatMember: 'user', chatMessage: 'hi, I need to buy a laptop', time: '15.54'});
    this.chatMessageSample.push({chatMember: 'robot', chatMessage: 'sure. what are the features of the laptop ?', time: '15.55'});
    this.chatMessageSample.push({chatMember: 'user', chatMessage: '2gb ram , 16inch screen hp laptop', time: '15.56'});
    this.chatMessageSample.push({chatMember: 'robot', chatMessage: 'sure. what are the features of the laptop ?', time: '15.55'});
    this.chatMessageSample.push({chatMember: 'user', chatMessage: '2gb ram , 16inch screen hp laptop', time: '15.56'});
    this.chatMessageSample.push({chatMember: 'robot', chatMessage: 'sure. what are the features of the laptop ?', time: '15.55'});
    this.chatMessageSample.push({chatMember: 'user', chatMessage: '2gb ram , 16inch screen hp laptop', time: '15.56'});
    this.chatMessageSample.push({chatMember: 'robot', chatMessage: 'sure. what are the features of the laptop ?', time: '15.55'});
    this.chatMessageSample.push({chatMember: 'user', chatMessage: '2gb ram , 16inch screen hp laptop', time: '15.56'});
    this.chatMessageSample.push({chatMember: 'robot', chatMessage: 'sure. what are the features of the laptop ?', time: '15.55'});
    this.chatMessageSample.push({chatMember: 'user', chatMessage: '2gb ram , 16inch screen hp laptop', time: '15.56'});


  }


  openChatBot() {
    this.isVisibleChat = !this.isVisibleChat;
    this.chatScrollBottom();
  }

  chatScrollBottom() {
    setTimeout(() => {
      const messageContent = document.getElementById('message_content');
      messageContent.scrollTop = messageContent.scrollHeight;
    }, 2);

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
          if (this.ipService.userId !== undefined && this.ipService.userId !== null) {
            // this.ipService.getRecommendItemList_chat()
            //   .subscribe(responseItem => {
            //     this.ipService.recommendedItemsList = responseItem.body;
            //   }, error => {
            //     console.log(error);
            //     alert('error ');
            //   });
          } else {
            // this.ipService.getRecommendItemListByIpAddress_chat()
            //   .subscribe(responseItem => {
            //     this.ipService.recommendedItemsList = responseItem.body;
            //   }, error => {
            //     console.log(error);
            //     alert('error ');
            //   });
          }

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
