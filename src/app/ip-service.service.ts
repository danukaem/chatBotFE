import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartItem} from './model/CartItem';
import {UserDetails} from './model/UserDetail';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  ipAddress: string;
  userName: string;
  userId: string;
  cartItems: CartItem[] = [];
  userDetails: UserDetails;
  resourceBaseURL: string;
  sessionId: string;
  stateOfOrder: string;
  cartId: string;
  orderId: string;

  constructor(private http: HttpClient) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  public getIp() {
    return this.http.get('http://api.ipify.org/?format=json');

  }

  public changeIpAddress(val: string) {
    this.ipAddress = val;

  }


  public getIpAddress() {
    return this.ipAddress;

  }

  public setUserName(userName: string) {
    this.userName = userName;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public addToCart(cartItem: CartItem) {
    this.cartItems.push(cartItem);
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${this.resourceBaseURL}` + 'cartItem/addCartItems', this.cartItems, {
      observe: 'response',
      headers
    }).subscribe(response => {
      // this.items = response.body;
    }, error => {
      console.log(error);
      alert('error');
    });

  }

  public getCartItems(): CartItem[] {
    return this.cartItems;
  }

  public setCartItems(cartItems: CartItem[]): CartItem[] {
    this.cartItems = cartItems;
    return this.cartItems;
  }

  // public removeFromCart(cartItem: CartItem) {
  //   this.cartItems.pop(cartItem);
  // }


  public getUserById(userId: string): UserDetails {
    let userDetails = new UserDetails();
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'user/getUserByUserId/' + this.userId, {
      observe: 'response',
      headers
    }).subscribe(response => {
      userDetails = response.body;
      this.userDetails = userDetails;
    }, error => {
      console.log(error);

      alert('error 1');
    });
    return userDetails;
  }

  public setSessionId(sessionId: string) {
    this.sessionId = sessionId;
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public setStateOfOrder(stateOfOrder: string) {

    this.stateOfOrder = stateOfOrder;
  }

  public getStateOfOrder() {

    return this.stateOfOrder;
  }


  public setCartId(cartId: string) {

    this.cartId = cartId;
  }

  public getCartId() {

    return this.cartId;
  }


  public setOrderId(orderId: string) {

    this.orderId = orderId;
  }

  public getOrderId() {

    return this.orderId;
  }

}
