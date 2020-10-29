import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCaculativePointsComponent } from './ad-caculative-points.component';

describe('AdCaculativePointsComponent', () => {
  let component: AdCaculativePointsComponent;
  let fixture: ComponentFixture<AdCaculativePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCaculativePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCaculativePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
