import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPhotoComponent } from './ad-photo.component';

describe('AdPhotoComponent', () => {
  let component: AdPhotoComponent;
  let fixture: ComponentFixture<AdPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
