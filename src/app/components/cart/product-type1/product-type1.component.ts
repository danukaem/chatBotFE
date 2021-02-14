import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../model/Item';

@Component({
  selector: 'app-product-type1',
  templateUrl: './product-type1.component.html',
  styleUrls: ['./product-type1.component.css']
})
export class ProductType1Component implements OnInit {

  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

}
