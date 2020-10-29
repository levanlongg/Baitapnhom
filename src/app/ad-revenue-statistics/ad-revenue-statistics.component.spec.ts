import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRevenueStatisticsComponent } from './ad-revenue-statistics.component';

describe('AdRevenueStatisticsComponent', () => {
  let component: AdRevenueStatisticsComponent;
  let fixture: ComponentFixture<AdRevenueStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRevenueStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRevenueStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
