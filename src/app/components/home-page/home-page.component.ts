import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';
import {UserDetails} from '../../model/UserDetail';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userList: UserDetails[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'user/getUserList', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.userList = response.body;
    }, error => {
      // alert('error')
    });

  }

}
