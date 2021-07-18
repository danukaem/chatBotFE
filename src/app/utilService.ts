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
    this.imageSrc.push({name: 'Frocks 2', path: './assets/images/homepage/6.jpg'});
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
    this.imageSrc.push({name: 'pruner', path: './assets/images/img/pruner.jpg'});
    this.imageSrc.push({name: 'cooker', path: './assets/images/img/cooker.jpg'});
    this.imageSrc.push({name: 'mopeds', path: './assets/images/img/mopeds.jpg'});
    this.imageSrc.push({name: 'grip', path: './assets/images/img/grip.jpg'});
    this.imageSrc.push({name: 'green pan', path: './assets/images/img/green_pan.jpg'});
    this.imageSrc.push({name: 'pan', path: './assets/images/img/pan.jpg'});
    this.imageSrc.push({name: 'makeup brush', path: './assets/images/img/makeup_brush.jpg'});
    this.imageSrc.push({name: 'single brush', path: './assets/images/img/single_brush.jpg'});
    this.imageSrc.push({name: 'motor bike', path: './assets/images/img/motor_bike.jpg'});
    this.imageSrc.push({name: 'jeep', path: './assets/images/img/jeep.jpg'});
    this.imageSrc.push({name: 'van', path: './assets/images/img/van.jpg'});
    this.imageSrc.push({name: 'car', path: './assets/images/img/car.jpg'});
    this.imageSrc.push({name: 'television', path: './assets/images/img/television.jpg'});
    this.imageSrc.push({name: 'tracksuit', path: './assets/images/img/tracksuit.jpg'});
    this.imageSrc.push({name: 'shorts', path: './assets/images/img/shorts.jpg'});
    this.imageSrc.push({name: 'socks', path: './assets/images/img/socks.jpg'});
    this.imageSrc.push({name: 'jeans', path: './assets/images/img/jeans.jpg'});
    this.imageSrc.push({name: 'coat', path: './assets/images/img/coat.jpg'});
    this.imageSrc.push({name: 'jacket', path: './assets/images/img/jacket.jpg'});
    this.imageSrc.push({name: 'dress', path: './assets/images/img/dress.jpg'});
    this.imageSrc.push({name: 'T-shirt', path: './assets/images/img/T-shirt.jpg'});
    this.imageSrc.push({name: 'sweater', path: './assets/images/img/sweater.jpg'});
    this.imageSrc.push({name: 'face cream', path: './assets/images/img/face_cream.jpg'});
    this.imageSrc.push({name: 'hair dryer', path: './assets/images/img/hair_dryer.jpg'});
    this.imageSrc.push({name: 'comb', path: './assets/images/img/comb.jpg'});
    this.imageSrc.push({name: 'pizza ', path: './assets/images/img/pizza.jpg'});
    this.imageSrc.push({name: 'fruits', path: './assets/images/img/fruits.jpg'});
    this.imageSrc.push({name: 'rice', path: './assets/images/img/rice.jpg'});
    this.imageSrc.push({name: 'sugar', path: './assets/images/img/sugar.jpg'});
    this.imageSrc.push({name: 'cnc machine', path: './assets/images/img/cnc_machine.jpg'});
    this.imageSrc.push({name: 'drill machine', path: './assets/images/img/drill_machine.jpg'});
    this.imageSrc.push({name: 'grinding machine', path: './assets/images/img/grinding_machine.jpg'});
    this.imageSrc.push({name: 'head phone', path: './assets/images/img/head_phone.jpg'});

  }

}
