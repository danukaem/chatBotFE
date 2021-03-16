import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../model/Item';
import {CartItem} from '../../../../model/CartItem';
import {environment} from '../../../../../environments/environment';
import {IpServiceService} from '../../../../ip-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() item: Item;
  resourceBaseURL: string;


  constructor(private http: HttpClient, private ipService: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
  }


  addToCart(item: Item, quantity) {
    alert('hello world ' + item.itemName);
    console.log('item ', item)
    console.log('quantity ', quantity)
    const cItem = new CartItem();
    cItem.item = item;
    cItem.quantity = quantity;
    cItem.userId = this.ipService.userId;
    cItem.ipAddress = this.ipService.ipAddress;
    console.log('cItem ', cItem)
    this.ipService.addToCart(cItem);

  }
}
