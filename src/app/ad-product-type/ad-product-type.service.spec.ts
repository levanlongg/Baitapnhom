import { TestBed } from '@angular/core/testing';

import { AdProductTypeService } from './ad-product-type.service';

describe('AdProductTypeService', () => {
  let service: AdProductTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdProductTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
