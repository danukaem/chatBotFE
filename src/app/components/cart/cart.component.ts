import {Component, OnInit} from '@angular/core';
import {IpServiceService} from '../../ip-service.service';
import {CartItem} from '../../model/CartItem';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderDetail} from '../../model/OrderDetail';
import {environment} from 'src/environments/environment';
import {Item} from '../../model/Item';
import {UserDetails} from '../../model/UserDetail';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  resourceBaseURL: string;
  itemDetailsList: Item[] = [];


  constructor(private ip: IpServiceService, private http: HttpClient) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {

    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'item/getItemList/4', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.itemDetailsList = response.body;
    }, error => {
      alert('error');
    });


    if (this.ip.userId !== undefined) {
      this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getCartItemListByUserId/' + this.ip.userId, {
        observe: 'response',
        headers
      }).subscribe(response => {
        console.log(response.body);
        this.cartItems = response.body;
        if (response.body !== null) {
          this.ip.setCartItems(this.cartItems);

        }
      }, error => {
        console.log(error);
        alert('error a');
      });
    }
    else {
      this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getCartItemListByIp/' + this.ip.ipAddress, {
        observe: 'response',
        headers
      }).subscribe(response => {
        console.log(response.body);
        this.cartItems = response.body;
        if (response.body !== null) {
          this.ip.setCartItems(this.cartItems);

        }
      }, error => {
        console.log(error);

        alert('error b');
      });
    }
  }

  placeOrder() {

    const orderDetail = new OrderDetail();
    orderDetail.user = this.ip.userDetails;

    if (this.ip.userId !== undefined) {
      const user = new UserDetails();
      user.userId = this.ip.userId;
      orderDetail.user = user;
    }
    orderDetail.cartItems = this.ip.cartItems;

    let totalAmount = 0;
    this.ip.cartItems.forEach(cItm => {
      totalAmount = totalAmount + (cItm.item.price * (100 - cItm.item.discountPercentage) / 100);
      console.log('*******************cart item');
      console.log(cItm)
      console.log('*******************cart item');
    })
    console.log('total : ' + totalAmount);
    orderDetail.orderAmount = totalAmount;
    orderDetail.isPaid = 1;
    orderDetail.purchaseDate = new Date();

    console.log('orderDetail ---=========----------===== ', orderDetail)

    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    this.http.post<any>(`${this.resourceBaseURL}` + 'orderDetails/addOrderDetails', orderDetail, {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.ip.setCartItems([]);
      this.ip.setOrderId(response.body)
      alert('successfully checkout');
    }, error => {
      console.log(error);

      alert('error 2');
    });

  }
}
