import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  imageSrc: { name: string, path: string }[] = [];

  constructor() {
    this.imageSrc.push({name: 'HP ProBook 440 G8 Notebook (i5 with Win10 Pro)', path: './assets/images/homepage/laptop/1.png'});
    this.imageSrc.push({name: 'HP ProBook 440 G8 Notebook (i5)', path: './assets/images/homepage/laptop/2.png'});
    this.imageSrc.push({name: 'HP ProBook 450 G8 Notebook (Win10, i7)', path: './assets/images/homepage/laptop/3.png'});
    this.imageSrc.push({name: 'Dell Inspiron 5502 (i5)', path: './assets/images/homepage/laptop/4.png'});
    this.imageSrc.push({name: 'Dell Inspiron 5502 (i7)', path: './assets/images/homepage/laptop/5.png'});
    this.imageSrc.push({name: 'Dell G3 3500 – i7 (16GB RAM)', path: './assets/images/homepage/laptop/6.png'});
    this.imageSrc.push({name: 'Acer Aspire 3 A315 (AMD Athlon)', path: './assets/images/homepage/laptop/7.png'});
    this.imageSrc.push({name: 'ACER Aspire A515 – i5 1135G7', path: './assets/images/homepage/laptop/8.png'});
    this.imageSrc.push({name: 'ACER A515 i3 1115G4 (DOS)', path: './assets/images/homepage/laptop/9.png'});
    this.imageSrc.push({name: 'Asus Tuf Gaming FX506 HN117T (RTX Graphics)', path: './assets/images/homepage/laptop/10.png'});
    this.imageSrc.push({name: 'Asus Tuf Gaming FX506 HN117T (GTX Graphics)', path: './assets/images/homepage/laptop/11.png'});
    this.imageSrc.push({name: 'ASUS ROG Flow X13', path: './assets/images/homepage/laptop/12.png'});
    this.imageSrc.push({name: 'Apple MacBook Air MGNE3LL/A (Gold – Late 2020)', path: './assets/images/homepage/laptop/13.png'});
    this.imageSrc.push({name: 'Apple MYD82LL/A 13.3-inch MacBook Pro (Space Gray)', path: './assets/images/homepage/laptop/14.png'});
    this.imageSrc.push({name: 'Apple MacBook Air (MGN63LL/A | MGN93LL/A | MGND3LL/A)', path: './assets/images/homepage/laptop/15.png'});
    this.imageSrc.push({name: 'Samsung Galaxy A22 6GB RAM 128GB', path: './assets/images/homepage/laptop/11.png'});
    this.imageSrc.push({name: 'Samsung Galaxy M32 8GB RAM 128GB', path: './assets/images/homepage/phone/2.png'});
    this.imageSrc.push({name: 'Samsung Galaxy M42 5G', path: './assets/images/homepage/phone/3.png'});
    this.imageSrc.push({name: 'Nokia C20 2GB RAM 32GB', path: './assets/images/homepage/phone/4.png'});
    this.imageSrc.push({name: 'Nokia 5.4 4GB RAM 128GB', path: './assets/images/homepage/phone/5.png'});
    this.imageSrc.push({name: 'Nokia 3.4 3GB RAM 64GB', path: './assets/images/homepage/phone/6.png'});
    this.imageSrc.push({name: 'Apple iPhone 12 mini 128GB', path: './assets/images/homepage/phone/7.png'});
    this.imageSrc.push({name: 'Apple iPhone 11 Pro Max 256GB', path: './assets/images/homepage/phone/8.png'});
    this.imageSrc.push({name: 'Apple iPhone 11 Pro', path: './assets/images/homepage/phone/9.png'});


  }

}
