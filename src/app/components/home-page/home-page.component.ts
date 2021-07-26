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
  resourceBaseURL: string;
  recommendedItemsList: Item[] = [];

  constructor(private http: HttpClient, public  ip: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    $('#sidebar-div').click(() => {
      $('.sidebar').toggleClass('fliph');
    });
  }

}
