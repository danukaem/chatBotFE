import {Component, OnInit} from '@angular/core';
import {IpServiceService} from './ip-service.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectName: string;
  userName: string;

  constructor(private http: HttpClient, private ip: IpServiceService) {
    this.projectName = environment.projectName;
  }

  ngOnInit() {
    this.ip.changeIpAddress(this.ip.makeRandom());
    this.ip.setCategoryList();

    this.userName = this.ip.userName;
  }


}
