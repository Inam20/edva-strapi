import { TestBed } from '@angular/core/testing';

import { LearningAboutService } from './learning-about.service';

describe('LearningAboutService', () => {
  let service: LearningAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
