import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductType1Component } from './product-type1.component';

describe('ProductType1Component', () => {
  let component: ProductType1Component;
  let fixture: ComponentFixture<ProductType1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductType1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
