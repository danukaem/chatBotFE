import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartItem} from './model/CartItem';
import {UserDetails} from './model/UserDetail';
import {environment} from 'src/environments/environment';
import {Item} from './model/Item';

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
  itemCategories: string[] = [];
  recommendedItemsList: Item[] = [];

  constructor(private http: HttpClient) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }


  loadUserNameAndUserId() {
    this.setUserName(localStorage.getItem('userName'));
    this.setUserId(localStorage.getItem('userId'));

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
    if (userName !== null) {
      localStorage.setItem('userName', userName);
    }
    this.userName = userName;
  }

  public getUserName(): string {
    console.log(localStorage.getItem('userNameaaa'))

    if (localStorage.getItem('userNamea') !== null) {
      this.userName = localStorage.getItem('userNamea');
    }
    return this.userName;
  }

  public setUserId(userId: string) {
    if (userId !== null) {
      localStorage.setItem('userId', userId);
    }
    this.userId = userId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public addToCart(cartItem: CartItem) {
    if (this.cartItems !== null) {
      this.cartItems.push(cartItem);
    }
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${this.resourceBaseURL}` + 'cartItem/addCartItems', this.cartItems, {
      observe: 'response',
      headers
    }).subscribe(response => {
      alert('Item added successfully');
      this.cartItems.pop();
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

  public setCategoryList() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'item/getCategoryList', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.itemCategories = response.body;
    }, error => {
      console.log(error);

    });
  }


  public getRecommendItemList() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    return this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getRecommendCartItemListByUserId/' + this.userId, {
      observe: 'response',
      headers
    });
  }

  public getRecommendItemListByIpAddress() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    return this.http.get<any>(`${this.resourceBaseURL}` + 'cartItem/getRecommendCartItemListByIpAddress/' + this.ipAddress, {
      observe: 'response',
      headers
    });
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


  public makeRandom(): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const lengthOfCode = 80;
    let text = '';
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


}
