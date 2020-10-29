import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdImportInvoiceComponent } from './ad-import-invoice.component';

describe('AdImportInvoiceComponent', () => {
  let component: AdImportInvoiceComponent;
  let fixture: ComponentFixture<AdImportInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdImportInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdImportInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
