import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartItem} from './model/CartItem';
import {AppModule} from './app.module';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  ipAddress: string;
  userName: string;
  userId: string;
  cartItems: CartItem[] = [];

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
    this.cartItems.push(cartItem);
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'cartItem/addCartItems', this.cartItems, {
      observe: 'response',
      headers
    }).subscribe(response => {
      // this.items = response.body;
    }, error => {
      alert('error');
    });


    console.log(this.cartItems)
  }

  public getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // public removeFromCart(cartItem: CartItem) {
  //   this.cartItems.pop(cartItem);
  // }


}
