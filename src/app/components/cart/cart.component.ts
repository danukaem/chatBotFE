import {Component, OnInit} from '@angular/core';
import {IpServiceService} from '../../ip-service.service';
import {CartItem} from '../../model/CartItem';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private ip: IpServiceService, private http: HttpClient) {
  }

  ngOnInit() {
    if (this.ip.userId != undefined) {
      const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

      this.http.get<any>(`${AppModule.resourceBaseURL}` + 'cartItem/getCartItemListByUserId/' + this.ip.userId, {
        observe: 'response',
        headers
      }).subscribe(response => {
        this.cartItems = response.body;
      }, error => {
        alert('error');
      });
    }
    else{
      const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

      this.http.get<any>(`${AppModule.resourceBaseURL}` + 'cartItem/getCartItemListByIp/' + this.ip.ipAddress, {
        observe: 'response',
        headers
      }).subscribe(response => {
        this.cartItems = response.body;
      }, error => {
        alert('error');
      });
    }

  }

}
