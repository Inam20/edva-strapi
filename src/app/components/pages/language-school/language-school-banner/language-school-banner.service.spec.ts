import { TestBed } from '@angular/core/testing';

import { LanguageSchoolBannerService } from './language-school-banner.service';

describe('LanguageSchoolBannerService', () => {
  let service: LanguageSchoolBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageSchoolBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});