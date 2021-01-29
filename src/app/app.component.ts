import {Component, OnInit} from '@angular/core';
import {IpServiceService} from './ip-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ipAddress: string;

  constructor(private http: HttpClient, private ip: IpServiceService) {
  }

  ngOnInit() {
    this.ip.getIp().subscribe((response: any) => {
      this.ip.ipAddress = response.ip;
      this.ipAddress = this.ip.ipAddress;

      let sessionId = this.ipAddress;
      sessionId = sessionId.replaceAll('.', '') + Date.now();
      this.ip.setSessionId(sessionId);

    });
  }


}
