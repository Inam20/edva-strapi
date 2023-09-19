import { TestBed } from '@angular/core/testing';

import { ElearningBannerService } from './elearning-banner.service';

describe('ElearningBannerService', () => {
  let service: ElearningBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElearningBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
