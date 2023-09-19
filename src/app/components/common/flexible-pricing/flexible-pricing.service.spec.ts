import { TestBed } from '@angular/core/testing';

import { FlexiblePricingService } from './flexible-pricing.service';

describe('FlexiblePricingService', () => {
  let service: FlexiblePricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexiblePricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
