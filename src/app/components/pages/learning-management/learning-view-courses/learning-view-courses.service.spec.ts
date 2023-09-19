import { TestBed } from '@angular/core/testing';

import { LearningViewCoursesService } from './learning-view-courses.service';

describe('LearningViewCoursesService', () => {
  let service: LearningViewCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningViewCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
