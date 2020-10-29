import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProductTypeComponent } from './ad-product-type.component';

describe('AdProductTypeComponent', () => {
  let component: AdProductTypeComponent;
  let fixture: ComponentFixture<AdProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
