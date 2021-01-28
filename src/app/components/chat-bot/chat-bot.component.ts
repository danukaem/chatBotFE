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

  constructor(private http: HttpClient) {
    this.chatServiceURL = environment.chatServiceURL;
  }

  ngOnInit() {
  }


  chatBot() {
    // document.getElementById('router-outlet-div').;
  }

  sendMessage() {

    console.log(this.userMessage)
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.chatServiceURL}` + 'chat?message=' + this.userMessage, {
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
