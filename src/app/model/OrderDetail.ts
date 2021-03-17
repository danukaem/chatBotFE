import {UserDetails} from './UserDetail';
import {CartItem} from './CartItem';

export class OrderDetail {
  orderId: string;
  orderAmount: number;
  orderDate: Date;
  purchaseDate: Date;
  user: UserDetails;
  cartItems: CartItem[];
  isPaid: any;
  stateOfOrder: any;
  // PAID, CANCELED,PENDING


  constructor() {

  }

}
