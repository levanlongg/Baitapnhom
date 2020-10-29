import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBillSaleComponent } from './ad-bill-sale.component';

describe('AdBillSaleComponent', () => {
  let component: AdBillSaleComponent;
  let fixture: ComponentFixture<AdBillSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBillSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBillSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
