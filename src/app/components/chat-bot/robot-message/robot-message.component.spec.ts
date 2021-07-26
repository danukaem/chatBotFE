import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotMessageComponent } from './robot-message.component';

describe('RobotMessageComponent', () => {
  let component: RobotMessageComponent;
  let fixture: ComponentFixture<RobotMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
