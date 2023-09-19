import { TestBed } from '@angular/core/testing';

import { HealthExperienceService } from './health-experience.service';

describe('HealthExperienceService', () => {
  let service: HealthExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
