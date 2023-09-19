import { TestBed } from '@angular/core/testing';

import { HealthCoachingBannerService } from './health-coaching-banner.service';

describe('HealthCoachingBannerService', () => {
  let service: HealthCoachingBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthCoachingBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
