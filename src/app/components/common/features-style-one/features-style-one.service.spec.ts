import { TestBed } from '@angular/core/testing';

import { FeaturesStyleOneService } from './features-style-one.service';

describe('FeaturesStyleOneService', () => {
  let service: FeaturesStyleOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesStyleOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
