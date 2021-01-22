import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../../app.module';
import {Item} from '../../../model/Item';
import {CartItem} from '../../../model/CartItem';
import {IpServiceService} from '../../../ip-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  quantity: number;

  constructor(private http: HttpClient, private ipService: IpServiceService) {
  }

  ngOnInit() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));


    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'item/getItemList', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.items = response.body;
    }, error => {
      alert('error');
    });

  }


  addToCart(item: Item, quantity: number) {
    let cItem = new CartItem();
    cItem.item=item;
    cItem.quantity = quantity;
    console.log(cItem);
    this.ipService.addToCart(cItem);

  }
}
