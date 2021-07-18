import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';
import {UserDetails} from '../../model/UserDetail';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('uName') uName;
  @ViewChild('eml') eml;
  @ViewChild('pswd') pswd;
  @ViewChild('bdy') bdy;
  @ViewChild('cntry') cntry;
  @ViewChild('cty') cty;
  @ViewChild('age') age;
  userDetails = new UserDetails();
  resourceBaseURL: string;

  constructor(private http: HttpClient, private router: Router) {
    this.resourceBaseURL = environment.resourceBaseURL;

  }

  ngOnInit() {
    this.userDetails.gender = 'MALE';
  }

  signUp() {

    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${this.resourceBaseURL}` + 'user/signUp', this.userDetails, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.clearText();
      alert('success');
      this.router.navigate(['/sign_in']);

    }, error => {
      alert('error');
    });


  }

  selectGender(value: string) {
    this.userDetails.gender = value;
  }

  clearText() {
    this.uName.nativeElement.value = ' ';
    this.eml.nativeElement.value = ' ';
    this.pswd.nativeElement.value = ' ';
    this.bdy.nativeElement.value = ' ';
    this.cntry.nativeElement.value = ' ';
    this.cty.nativeElement.value = ' ';
    this.age.nativeElement.value = ' ';

  }

}
