import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDetails} from '../../model/UserDetail';
import {environment} from 'src/environments/environment';
import * as $ from '../../../../node_modules/jquery';
import {IpServiceService} from '../../ip-service.service';
import {Item} from '../../model/Item';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userList: UserDetails[];
  resourceBaseURL: string;
  recommendedItemsList: Item[] = [];

  constructor(private http: HttpClient, public  ip: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    this.http.get<any>(`${this.resourceBaseURL}` + 'user/getUserList', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.userList = response.body;
    }, error => {
      // alert('error')
    });

    $('#sidebar-div').click(() => {
      $('.sidebar').toggleClass('fliph');
    });

    // setTimeout(() => {
    //   console.log('session id : ', this.ip.ipAddress)


    if (this.ip.ipAddress != null) {
      this.ip.getRecommendItemListByIpAddress()
        .subscribe(response => {
          this.ip.recommendedItemsList = response.body;
        }, error => {
          console.log(error);
          alert('error ');
        });
    } else {
      this.ip.getRecommendItemList()
        .subscribe(response => {
          this.ip.recommendedItemsList = response.body;
        }, error => {
          console.log(error);
          alert('error ');
        });
    }
    // }, 1000);

  }

}
