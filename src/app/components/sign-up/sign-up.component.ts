import {Component, OnInit} from '@angular/core';
import {UserDetails} from '../../entity/UserDetail';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';

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

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'user/saveUser', this.userDetails, {
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
