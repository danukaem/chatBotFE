import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../../../model/Item';
import {IpServiceService} from '../../../ip-service.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  // itemDetailsList: Item[] = [];
  resourceBaseURL: string;

  constructor(private http: HttpClient, public ipService: IpServiceService) {
    this.resourceBaseURL = environment.resourceBaseURL;
  }

  ngOnInit() {
    this.ipService.itemListLoading();
    // const headers = new HttpHeaders(({Authorization: 'Basic ' + btoa('user' + ':' + 'password')}));
    //
    // this.http.get<any>(`${this.resourceBaseURL}` + 'item/getItemList', {
    //   observe: 'response',
    //   headers
    // }).subscribe(response => {
    //   this.itemDetailsList = response.body;
    // }, error => {
    //   alert('error in get Item List');
    // });

  }
}
