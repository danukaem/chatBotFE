import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../../model/Item';
import {environment} from 'src/environments/environment';
import {AppModule} from '../../app.module';
import {IpServiceService} from '../../ip-service.service';
import {UtilService} from '../../utilService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  categoriesList = [];
  item = new Item();
  resourceBaseURL: string;
  imageSrc: { name: string, path: string }[] = [];
  colorList: any = [];
  brandList: any = [];

  constructor(private http: HttpClient, private ipService: IpServiceService, private utilService: UtilService
  ) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    this.categoriesList = ['LAPTOP', 'PHONE'];

    this.ipService.setCategoryList();
    setTimeout(() => {
      // this.categoriesList = this.ipService.itemCategories;
      this.imageSrc = this.utilService.imageSrc;
      this.item.brand = 'ACER';
      this.item.color = 'BLUE';
      this.item.category = this.categoriesList[0];
      this.item.imgSrc = this.imageSrc[0].path;
    }, 100);
    this.colorList = ['BLUE', 'BLACK', 'GREEN', 'WHITE', 'ORANGE', 'YELLOW', 'PINK', 'RED', 'PURPLE', 'GRAY', 'BROWN'];
    this.brandList = ['ACER', 'APPLE', 'ASUS', 'DELL', 'HP', 'MICROSOFT', 'NOKIA', 'SAMSUNG', 'BLACKBERRY', 'GOOGLE', 'HTC'];
  }

  saveItem() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${this.resourceBaseURL}` + 'item/addItem', this.item, {
      observe: 'response',
      headers
    }).subscribe(response => {
      alert('success');
      console.log(response.body);
    }, error => {
      alert('error in item saving');
    });
    // setTimeout(() => {
    //   location.reload();
    // }, 100);
  }

  categorySelect(category: any) {
    this.item.category = category;

  }

  selectImage(imagePath: any) {
    this.item.imgSrc = imagePath;
  }

  colorSelect(color: any) {
    this.item.color = color;

  }

  brandSelect(brand: any) {
    this.item.brand = brand;

  }
}
