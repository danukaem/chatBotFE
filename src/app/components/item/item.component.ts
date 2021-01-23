import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../../model/Item';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item = new Item();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  saveItem() {
    const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));

    this.http.post<any>(`${AppModule.resourceBaseURL}` + 'item/addItem', this.item, {
      observe: 'response',
      headers
    }).subscribe(response => {
      alert('success');
      console.log(response.body);
    }, error => {
      alert('error');
    });
  }
}
