import { TestBed } from '@angular/core/testing';

import { VendorAboutService } from './vendor-about.service';

describe('VendorAboutService', () => {
  let service: VendorAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
