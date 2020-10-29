import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNewsTypeComponent } from './ad-news-type.component';

describe('AdNewsTypeComponent', () => {
  let component: AdNewsTypeComponent;
  let fixture: ComponentFixture<AdNewsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdNewsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNewsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
