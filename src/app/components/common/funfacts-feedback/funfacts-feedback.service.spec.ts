import { TestBed } from '@angular/core/testing';

import { FunfactsFeedbackService } from './funfacts-feedback.service';

describe('FunfactsFeedbackService', () => {
  let service: FunfactsFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunfactsFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
