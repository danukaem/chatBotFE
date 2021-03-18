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
        this.router.navigate(['/home']);

        setTimeout(() => {
          location.reload();
        }, 100);

      }

    }, error => {
      alert('error');
    });
  }
}
