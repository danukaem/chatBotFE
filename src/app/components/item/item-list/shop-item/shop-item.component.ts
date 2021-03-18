import {Component, Input, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('qty') qty;

  constructor(private http: HttpClient, private ipService: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
  }


  addToCart(item: Item, quantity) {
    // alert('Item added successfully');
    // console.log('item ', item)
    // console.log('quantity ', quantity)
    const cItem = new CartItem();
    cItem.item = item;
    cItem.quantity = quantity;
    cItem.userId = this.ipService.userId;
    cItem.ipAddress = this.ipService.ipAddress;
    console.log('cItem ', cItem)
    this.ipService.addToCart(cItem);

    this.qty.nativeElement.value = '';
  }
}
