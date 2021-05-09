import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../../model/Item';
import {environment} from 'src/environments/environment';
import {AppModule} from '../../app.module';
import {IpServiceService} from '../../ip-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  categoriesList = [];
  itemImagePaths = [];
  item = new Item();
  resourceBaseURL: string;

  constructor(private http: HttpClient, private ipService: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    this.ipService.setCategoryList();
    setTimeout(() => {
      this.categoriesList = this.ipService.itemCategories;
      this.itemImagePaths = AppModule.itemImagePaths;
      this.item.category = this.categoriesList[0];
      this.item.imgSrc = this.itemImagePaths[0];
    }, 100)


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
  }

  categorySelect(category: any) {
    this.item.category = category;

  }

  selectImage(imagePath: any) {
    this.item.imgSrc = imagePath;
  }
}
