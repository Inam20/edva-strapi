import { TestBed } from '@angular/core/testing';

import { LearningBannerService } from './learning-banner.service';

describe('LearningBannerService', () => {
  let service: LearningBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
