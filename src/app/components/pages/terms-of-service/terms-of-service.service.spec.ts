import { TestBed } from '@angular/core/testing';

import { TermsOfServiceService } from './terms-of-service.service';

describe('TermsOfServiceService', () => {
  let service: TermsOfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsOfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
