import { TestBed } from '@angular/core/testing';

import { GetInstantCoursesService } from './get-instant-courses.service';

describe('GetInstantCoursesService', () => {
  let service: GetInstantCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInstantCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
