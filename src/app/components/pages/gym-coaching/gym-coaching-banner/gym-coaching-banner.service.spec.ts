import { TestBed } from '@angular/core/testing';

import { GymCoachingBannerService } from './gym-coaching-banner.service';

describe('GymCoachingBannerService', () => {
  let service: GymCoachingBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymCoachingBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
