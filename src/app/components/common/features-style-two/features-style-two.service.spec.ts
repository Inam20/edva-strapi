import { TestBed } from '@angular/core/testing';

import { FeaturesStyleTwoService } from './features-style-two.service';

describe('FeaturesStyleTwoService', () => {
  let service: FeaturesStyleTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesStyleTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
