import { TestBed } from '@angular/core/testing';

import { HealthFeedbackService } from './health-feedback.service';

describe('HealthFeedbackService', () => {
  let service: HealthFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
