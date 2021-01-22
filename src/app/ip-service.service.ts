import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  ipAddress: string;
  userName: string;

  constructor(private http: HttpClient) {
  }

  public getIp() {
    return this.http.get('http://api.ipify.org/?format=json');

  }

  public changeIpAddress(val: string) {
    this.ipAddress = val;

  }

  public setUserName(userName: string) {
    this.userName = userName;
  }

  public getUserName(): string {
    return this.userName;
  }
}
