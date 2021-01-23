import {Item} from './Item';

export class CartItem {
  cartItemId: string;
  item: Item;
  quantity: number;
  userId:string;
  ipAddress:string;

  constructor() {

  }
}
