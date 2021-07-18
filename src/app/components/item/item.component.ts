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

  constructor(private http: HttpClient, private ipService: IpServiceService, private utilService: UtilService
  ) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {

    this.ipService.setCategoryList();
    setTimeout(() => {
      this.categoriesList = this.ipService.itemCategories;
      this.imageSrc = this.utilService.imageSrc;
      this.item.category = this.categoriesList[0];
      this.item.imgSrc = this.imageSrc[0].path;
    }, 100);


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
      alert('error');
    });
    location.reload();
  }

  categorySelect(category: any) {
    this.item.category = category;

  }

  selectImage(imagePath: any) {
    this.item.imgSrc = imagePath;
  }
}
