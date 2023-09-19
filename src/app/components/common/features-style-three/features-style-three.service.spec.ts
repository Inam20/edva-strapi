import { TestBed } from '@angular/core/testing';

import { FeaturesStyleThreeService } from './features-style-three.service';

describe('FeaturesStyleThreeService', () => {
  let service: FeaturesStyleThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesStyleThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
