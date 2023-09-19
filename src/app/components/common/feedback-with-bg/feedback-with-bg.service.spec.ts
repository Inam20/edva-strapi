import { TestBed } from '@angular/core/testing';

import { FeedbackWithBgService } from './feedback-with-bg.service';

describe('FeedbackWithBgService', () => {
  let service: FeedbackWithBgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackWithBgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
