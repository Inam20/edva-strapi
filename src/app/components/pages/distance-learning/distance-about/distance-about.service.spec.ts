import { TestBed } from '@angular/core/testing';

import { DistanceAboutService } from './distance-about.service';

describe('DistanceAboutService', () => {
  let service: DistanceAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanceAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
