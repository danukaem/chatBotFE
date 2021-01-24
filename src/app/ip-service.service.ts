import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartItem} from './model/CartItem';
import {AppModule} from './app.module';
import {UserDetails} from './model/UserDetail';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  ipAddress: string;
  userName: string;
  userId: string;
  cartItems: CartItem[] = [];
  userDetails: UserDetails;
  orderId:string;

  constructor(private http: HttpClient) {
  }

  public getIp() {
    return this.http.get('http://api.ipify.org/?format=json');
  }

  public changeIpAddress(val: string) {
    this.ipAddress = val;
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
    console.log('cartitem');
    console.log(cartItem);
    console.log('cartitem');
    this.cartItems.push(cartItem);
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'cartItem/addCartItems', this.cartItems, {
      observe: 'response',
      headers
    }).subscribe(response => {
      // this.items = response.body;
    }, error => {
      console.log(error);

      alert('error');
    });


    console.log(this.cartItems)
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

    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'user/getUserByUserId/' + this.userId, {
      observe: 'response',
      headers
    }).subscribe(response => {
      userDetails = response.body;
      this.userDetails = userDetails;
      console.log('********************************************');
      console.log(userDetails);
      console.log('********************************************');
    }, error => {
      console.log(error);

      alert('error 1');
    });
    return userDetails;
  }


  getOrderId(): string {
    return this.orderId;
  }

  setOrderId(value: string) {
    this.orderId = value;
  }
}
