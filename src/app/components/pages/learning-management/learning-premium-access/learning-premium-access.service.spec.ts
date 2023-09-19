import { TestBed } from '@angular/core/testing';

import { LearningPremiumAccessService } from './learning-premium-access.service';

describe('LearningPremiumAccessService', () => {
  let service: LearningPremiumAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningPremiumAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
