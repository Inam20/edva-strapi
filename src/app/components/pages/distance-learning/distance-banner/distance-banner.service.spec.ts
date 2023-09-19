import { TestBed } from '@angular/core/testing';

import { DistanceBannerService } from './distance-banner.service';

describe('DistanceBannerService', () => {
  let service: DistanceBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});