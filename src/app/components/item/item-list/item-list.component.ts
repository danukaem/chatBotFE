import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../../../model/Item';
import {CartItem} from '../../../model/CartItem';
import {IpServiceService} from '../../../ip-service.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemDetailsList: Item[] = [];
  resourceBaseURL: string;

  constructor(private http: HttpClient, private ipService: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    const item1 = new Item();
    item1.itemName = 'samsung s1';
    item1.price = 250;
    item1.discountPercentage = 50;
    item1.imgSrc = '../../../../assets/images/img/product-1.jpg';
    this.itemDetailsList.push(item1);

    const item2 = new Item();
    item2.itemName = 'samsung s2';
    item2.price = 440;
    item2.discountPercentage = 50;
    item2.imgSrc = '../../../../assets/images/img/product-2.jpg';

    this.itemDetailsList.push(item2);


    // const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    //
    // this.http.get<any>(`${this.resourceBaseURL}` + 'item/getItemList', {
    //   observe: 'response',
    //   headers
    // }).subscribe(response => {
    //   this.items = response.body;
    // }, error => {
    //   alert('error');
    // });

  }


  addToCart(item: Item, quantity) {
    const cItem = new CartItem();
    cItem.item = item;
    cItem.quantity = quantity;
    cItem.userId = this.ipService.userId;
    cItem.ipAddress = this.ipService.ipAddress;
    this.ipService.addToCart(cItem);

  }
}
