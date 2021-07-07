import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  imageSrc: { name: string, path: string }[] = [];

  constructor() {
    this.imageSrc.push({name: 'Washing Machine', path: './assets/images/homepage/1.png'});
    this.imageSrc.push({name: 'Refrigerator', path: './assets/images/homepage/2.jpg'});
    this.imageSrc.push({name: 'Bun', path: './assets/images/homepage/3.jpg'});
    this.imageSrc.push({name: 'Bread', path: './assets/images/homepage/4.jpg'});
    this.imageSrc.push({name: 'Frocks 1', path: './assets/images/homepage/5.jpg'});
    this.imageSrc.push({name: 'Frocks 1', path: './assets/images/homepage/6.jpg'});
    this.imageSrc.push({name: 'Noodles', path: './assets/images/homepage/7.jpg'});
    this.imageSrc.push({name: 'Iphone 6/6s', path: './assets/images/img/h4-slide.png'});
    this.imageSrc.push({name: 'School Bag', path: './assets/images/img/h4-slide2.png'});
    this.imageSrc.push({name: 'Ipad', path: './assets/images/img/h4-slide3.png'});
    this.imageSrc.push({name: 'HeadPhone', path: './assets/images/img/h4-slide4.png'});
    this.imageSrc.push({name: 'Microsoft Phone', path: './assets/images/img/h4-slide7.png'});
    this.imageSrc.push({name: 'Samsung Phone', path: './assets/images/img/product-1.jpg'});
    this.imageSrc.push({name: 'Nokia Phone', path: './assets/images/img/product-2.jpg'});
    this.imageSrc.push({name: 'LG Phone', path: './assets/images/img/product-3.jpg'});
    this.imageSrc.push({name: 'Sony Phone', path: './assets/images/img/product-4.jpg'});
    this.imageSrc.push({name: 'Laptop', path: './assets/images/img/product-thumb-3.jpg'});
    this.imageSrc.push({name: 'Monitor', path: './assets/images/img/product-thumb-4.jpg'});

  }

}
