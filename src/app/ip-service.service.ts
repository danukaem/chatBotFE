import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './model/Item';
import {CartItem} from './model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  ipAddress: string;
  userName: string;
  cartItems: CartItem[];

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

  public addToCart(cartItem: CartItem) {
    let cItems: CartItem[];
    cItems.push(cartItem);
    this.cartItems = cItems;


    console.log(this.cartItems)
  }

  public removeFromCart(cartItem: CartItem) {
    this.cartItems.pop(cartItem);
  }

}
