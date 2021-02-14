import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {

  @Input() imgSrc: string;

  constructor() {
  }

  ngOnInit() {
  }

}
