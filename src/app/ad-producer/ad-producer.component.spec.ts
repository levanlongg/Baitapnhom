import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdProducerComponent } from './ad-producer.component';

describe('AdProducerComponent', () => {
  let component: AdProducerComponent;
  let fixture: ComponentFixture<AdProducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdProducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
