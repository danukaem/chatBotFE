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

  // ipAddress: string;
  userName: string;
  userId: string;
  cartItems: CartItem[] = [];
  userDetails: UserDetails;
  resourceBaseURL: string;
  // sessionId: string;
  stateOfOrder: string;
  cartId: string;
  orderId: string;
  itemCategories: string[] = [];
  recommendedItemsList: Item[] = [];

  itemDetailsList: Item[] = [];

  constructor(private http: HttpClient) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }


  loadUserNameAndUserId() {
    this.setUserName(localStorage.getItem('userName'));
    this.setUserId(localStorage.getItem('userId'));

  }

  // public getIp() {
  //   return this.http.get('http://api.ipify.org/?format=json');
  //
  // }

  public changeIpAddress(val: string) {
    localStorage.setItem('sessionId', val);

    // this.ipAddress = val;

  }


  public getIpAddress() {
    return localStorage.getItem('sessionId');
    // return this.ipAddress;

  }

  public setUserName(userName: string) {
    if (userName !== null) {
      localStorage.setItem('userName', userName);
    }
    this.userName = userName;
  }

  public getUserName(): string {
    console.log(localStorage.getItem('userName'))

    if (localStorage.getItem('userName') !== null) {
      this.userName = localStorage.getItem('userName');
    }
    return this.userName;
  }

  public setUserId(userId: string) {
    if (userId !== null) {
      localStorage.setItem('userId', userId);
    }
    this.userId = userId;
    this.getUserById(this.userId);

  }

  public getUserId(): string {
    return this.userId;
  }


  public itemListLoading() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'item/getItemList', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.itemDetailsList = response.body;
    }, error => {
      alert('error in get Item List loading');
    });

  }

  public recommenItemListLoading() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'item/getRecommendItems?userId=' + this.userId + '&sessionId=' + this.getIpAddress(), {
      observe: 'response',
      headers
    }).subscribe(response => {
      if (response.body != null) {
        this.itemDetailsList = response.body;
      }
    }, error => {
      alert('error in get recommend Item List loading');
    });

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
      alert('error in add Cart Items');
    });

  }


  searchByBrand(brand) {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.get<any>(`${this.resourceBaseURL}` + 'item/findAllByBrand?brand=' + brand, {
      observe: 'response',
      headers
    }).subscribe(response => {
      if (response.body != null) {
        this.itemDetailsList = response.body;
      }
    }, error => {
      alert('error in search by brand');
    });
  }

  public getCartItems(): CartItem[] {
    return this.cartItems;
  }

  public setCartItems(cartItems: CartItem[]): CartItem[] {
    this.cartItems = cartItems;
    return this.cartItems;
  }


  public getUserById(userId: string): UserDetails {
    let userDetails = new UserDetails();
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    if (this.userId != null) {
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
    }
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

  public getUser(): UserDetails {
    return this.userDetails;
  }


  // public setSessionId(sessionId: string) {
  //   this.sessionId = sessionId;
  // }

  // public getSessionId(): string {
  //   return this.sessionId;
  // }

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
    console.log('----------------------------------------------------------------------------------')
    console.log(text)
    console.log('----------------------------------------------------------------------------------')
    return text;
  }


}
