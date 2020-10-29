import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNewsComponent } from './ad-news.component';

describe('AdNewsComponent', () => {
  let component: AdNewsComponent;
  let fixture: ComponentFixture<AdNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
