import { TestBed } from '@angular/core/testing';

import { OnlineTrainingBannerService } from './online-training-banner.service';

describe('OnlineTrainingBannerService', () => {
  let service: OnlineTrainingBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineTrainingBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});