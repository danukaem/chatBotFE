import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';
import {UserDetails} from '../../model/UserDetail';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userDetails = new UserDetails();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  signUp() {

    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'user/signUp', this.userDetails, {
      observe: 'response',
      headers
    }).subscribe(response => {
      alert('success');
      console.log(response.body);
    }, error => {
      alert('error');
    });


  }

  selectGender(value: string) {
    alert(value);
    this.userDetails.gender = value;
  }
}
