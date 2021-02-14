import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../../model/Item';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

  addToCartPress() {
    alert('hello' + this.item.itemName);
  }
}
