import { TestBed } from '@angular/core/testing';

import { LanguageSchoolCoursesService } from './language-school-courses.service';

describe('LanguageSchoolCoursesService', () => {
  let service: LanguageSchoolCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSchoolCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
