import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IpServiceService} from '../../ip-service.service';
import {UserDetails} from '../../model/UserDetail';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userDetails = new UserDetails();
  resourceBaseURL: string;

  constructor(private http: HttpClient, private ipService: IpServiceService, private router: Router) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
  }

  signin() {
    this.userDetails.sessionId = this.ipService.getIpAddress();
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${this.resourceBaseURL}` + 'user/signIn', this.userDetails, {
      observe: 'response',
      headers
    }).subscribe(response => {
      if (response.body == null) {
        alert('enter valid user credentials');

      } else {
        alert('login success');
        this.ipService.setUserName(response.body.userName);
        this.ipService.setUserId(response.body.userId);
        this.ipService.getUserById(response.body.userId);
        this.router.navigate(['/home']);

        setTimeout(() => {
          location.reload();
        }, 100);

      }

    }, error => {
      alert('error in signIn');
    });

    setTimeout(() => {
      const msg = 'user name is ' + this.userDetails.userName + ' and user id is ' + localStorage.getItem('userId');

      this.http.get<any>(`${this.resourceBaseURL}` + 'chatMessage/chatLoginRasa?chatMessage=' + msg + '&chatSessionId=' + this.ipService.getIpAddress()
        + '&userId=' + (this.ipService.getUserId() === undefined ? '' : this.ipService.getUserId()), {
        observe: 'response',
        headers
      }).subscribe(response => {

      }, error => {
        console.log(error);
        alert('error 2');

      });
    }, 1000);


  }
}
