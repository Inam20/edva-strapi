import { TestBed } from '@angular/core/testing';

import { VendorBannerService } from './vendor-banner.service';

describe('VendorBannerService', () => {
  let service: VendorBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});