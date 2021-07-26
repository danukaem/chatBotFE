import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-robot-message',
  templateUrl: './robot-message.component.html',
  styleUrls: ['./robot-message.component.css']
})
export class RobotMessageComponent implements OnInit {

  @Input() message: string;
  @Input() time: string;
  constructor() { }

  ngOnInit() {
  }

}
