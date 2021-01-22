import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppModule} from '../../../app.module';
import {Item} from '../../../model/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));


    this.http.get<any>(`${AppModule.resourceBaseURL}` + 'item/getItemList', {
      observe: 'response',
      headers
    }).subscribe(response => {
      this.items = response.body;
      console.log(response.body);
    }, error => {
      alert('error');
    });

  }

}
