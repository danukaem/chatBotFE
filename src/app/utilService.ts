import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  imageSrc: { name: string, path: string }[] = [];

  constructor() {
    this.imageSrc.push({name: 'abc1', path: './assets/images/homepage/1.png'});
    this.imageSrc.push({name: 'abc2', path: './assets/images/homepage/2.jpg'});
    this.imageSrc.push({name: 'abc3', path: './assets/images/homepage/3.jpg'});
    this.imageSrc.push({name: 'abc4', path: './assets/images/homepage/4.jpg'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/homepage/5.jpg'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/homepage/6.jpg'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/homepage/7.jpg'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/img/brand4.png'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/img/brand5.png'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/img/brand6.png'});
    this.imageSrc.push({name: 'abc5', path: './assets/images/img/brand1.png'});
  }

}
