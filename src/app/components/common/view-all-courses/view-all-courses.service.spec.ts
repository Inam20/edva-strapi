import { TestBed } from '@angular/core/testing';

import { ViewAllCoursesService } from './view-all-courses.service';

describe('ViewAllCoursesService', () => {
  let service: ViewAllCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAllCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
