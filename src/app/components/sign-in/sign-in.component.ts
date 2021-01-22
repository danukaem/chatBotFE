import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';
import {IpServiceService} from '../../ip-service.service';
import {UserDetails} from '../../model/UserDetail';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userDetails = new UserDetails();

  constructor(private http: HttpClient,private ipService:IpServiceService) { }

  ngOnInit() {
  }

  signin() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'user/signIn', this.userDetails, {
      observe: 'response',
      headers
    }).subscribe(response => {
      alert('login success');
      this.ipService.setUserName(response.body.userName)
      console.log(response.body);
    }, error => {
      alert('error');
    });
  }
}
