import { TestBed } from '@angular/core/testing';

import { PremiumAccessService } from './premium-access.service';

describe('PremiumAccessService', () => {
  let service: PremiumAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
