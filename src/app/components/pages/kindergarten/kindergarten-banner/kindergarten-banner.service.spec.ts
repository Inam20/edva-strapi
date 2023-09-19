import { TestBed } from '@angular/core/testing';

import { KindergartenBannerService } from './kindergarten-banner.service';

describe('KindergartenBannerService', () => {
  let service: KindergartenBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
