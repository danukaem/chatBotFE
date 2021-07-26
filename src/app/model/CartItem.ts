import {Item} from './Item';
import {UserDetails} from './UserDetail';

export class CartItem {
  cartItemId: string;
  item: Item;
  quantity: number;
  user: UserDetails;
  sessionId: string;

  constructor() {

  }
}
