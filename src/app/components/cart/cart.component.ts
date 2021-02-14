import {Component, OnInit} from '@angular/core';
import {IpServiceService} from '../../ip-service.service';
import {CartItem} from '../../model/CartItem';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OrderDetail} from '../../model/OrderDetail';
import { environment } from 'src/environments/environment';
import {Item} from '../../model/Item';

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

    const item1 = new Item();
    item1.itemName = 'samsung s1';
    item1.price = 250;
    item1.discountPercentage = 50;
    item1.imgSrc = '../../../../assets/images/img/product-1.jpg';
    this.itemDetailsList.push(item1);

    const item2 = new Item();
    item2.itemName = 'samsung s2';
    item2.price = 440;
    item2.discountPercentage = 50;
    item2.imgSrc = '../../../../assets/images/img/product-2.jpg';

    this.itemDetailsList.push(item2);

    // if (this.ip.userId != undefined) {
    //   const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    //
    //   this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getCartItemListByUserId/' + this.ip.userId, {
    //     observe: 'response',
    //     headers
    //   }).subscribe(response => {
    //     this.cartItems = response.body;
    //     this.ip.setCartItems(this.cartItems);
    //   }, error => {
    //     console.log(error);
    //     alert('error a');
    //   });
    // }
    // else {
    //   const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    //
    //   this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getCartItemListByIp/' + this.ip.ipAddress, {
    //     observe: 'response',
    //     headers
    //   }).subscribe(response => {
    //     this.cartItems = response.body;
    //     this.ip.setCartItems(this.cartItems);
    //
    //   }, error => {
    //     console.log(error);
    //
    //     alert('error b');
    //   });
    // }
    // this.ip.getUserById(this.ip.userId);
  }

  placeOrder() {
    // console.log(this.ip.cartItems)
    // console.log(this.ip.userId)

    // let orderDetail = new OrderDetail();
    // orderDetail.user = this.ip.userDetails;
    //
    // orderDetail.cartItems = this.ip.cartItems;
    // orderDetail.purchaseDate = new Date();
    // console.log('#################################################');
    // console.log(orderDetail);
    // console.log('#################################################');
    //
    //
    // const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    // this.http.post<any>(`${this.resourceBaseURL}` + 'orderDetails/addOrderDetails', orderDetail, {
    //   observe: 'response',
    //   headers
    // }).subscribe(response => {
    //   this.cartItems = response.body;
    //   this.ip.setCartItems(this.cartItems);
    //
    // }, error => {
    //   console.log(error);
    //
    //   alert('error 2');
    // });

  }
}
