import { TestBed } from '@angular/core/testing';

import { LanguageSchoolAboutService } from './language-school-about.service';

describe('LanguageSchoolAboutService', () => {
  let service: LanguageSchoolAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSchoolAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
