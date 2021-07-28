import {Component, OnInit} from '@angular/core';
import {IpServiceService} from '../../ip-service.service';
import {CartItem} from '../../model/CartItem';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderDetail} from '../../model/OrderDetail';
import {environment} from 'src/environments/environment';
import {Item} from '../../model/Item';
import {UserDetails} from '../../model/UserDetail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  resourceBaseURL: string;
  itemDetailsList: Item[] = [];


  constructor(public ip: IpServiceService, private http: HttpClient) {
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
      alert('error in get Item List');
    });


    if (this.ip.userId !== undefined && this.ip.userId !== null) {
      // get cart items
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
        alert('error in get Cart Item List By User Id');
      });


    } else {
      this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getCartItemListByIp/' + this.ip.getIpAddress(), {
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

        alert('error in get Cart Item List By session');
      });

    }
  }

  placeOrder() {

    const orderDetail = new OrderDetail();
    orderDetail.user = this.ip.userDetails;

    if (this.ip.userId !== undefined && this.ip.userId !== null) {
      const user = new UserDetails();
      user.userId = this.ip.userId;
      orderDetail.user = user;
    }
    orderDetail.cartItems = this.ip.cartItems;

    let totalAmount = 0;
    this.ip.cartItems.forEach(cItm => {
      totalAmount = totalAmount + (cItm.item.price * (100 - cItm.item.discountPercentage) / 100);
    });
    orderDetail.orderAmount = totalAmount;
    orderDetail.orderDate = new Date();
    orderDetail.purchaseDate = new Date();
    orderDetail.stateOfOrder = 'PAID';
    orderDetail.sessionId = this.ip.getIpAddress();


    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    this.http.post<any>(`${this.resourceBaseURL}` + 'orderDetails/addOrderDetails', orderDetail, {
      observe: 'response',
      headers
    }).subscribe(response => {
      const itemListLength = this.ip.cartItems.length;
      for (let i = 0; i < itemListLength; i++) {
        this.ip.cartItems.pop();
      }

      this.ip.setCartItems([]);
      this.ip.setOrderId(response.body)
      alert('successfully checkout');
    }, error => {
      console.log(error);

      alert('error in add Order Details');
    });

  }

  removeCartItem(cartItem: CartItem) {
    const orderDetail = new OrderDetail();
    orderDetail.user = this.ip.userDetails;
    if (this.ip.userId !== undefined && this.ip.userId !== null) {
      const user = new UserDetails();
      user.userId = this.ip.userId;
      orderDetail.user = user;
    }
    const cartItems: CartItem[] = [];
    cartItems.push(cartItem);
    orderDetail.cartItems = cartItems;

    const totalAmount = 0;

    // ??????????????????????????? check this total
    orderDetail.orderAmount = totalAmount;
    orderDetail.purchaseDate = new Date();
    orderDetail.stateOfOrder = 'CANCELED';


    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    this.http.post<any>(`${this.resourceBaseURL}` + 'orderDetails/removeOrderDetails', orderDetail, {
      observe: 'response',
      headers
    }).subscribe(response => {
      // this.ip.cartItems.pop(cartItem);
      this.ip.cartItems.splice(this.ip.cartItems.indexOf(cartItem), 1);

      this.ip.setCartItems(this.ip.cartItems);
      this.ip.setOrderId(response.body)
      alert('successfully removed');
    }, error => {
      console.log(error);

      alert('error in remove Order Details');
    });


  }
}
