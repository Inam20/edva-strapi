import { TestBed } from '@angular/core/testing';

import { KindergartenFeedbackService } from './kindergarten-feedback.service';

describe('KindergartenFeedbackService', () => {
  let service: KindergartenFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
