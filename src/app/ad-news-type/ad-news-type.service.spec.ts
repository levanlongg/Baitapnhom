import { TestBed } from '@angular/core/testing';

import { AdNewsTypeService } from './ad-news-type.service';

describe('AdNewsTypeService', () => {
  let service: AdNewsTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdNewsTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
