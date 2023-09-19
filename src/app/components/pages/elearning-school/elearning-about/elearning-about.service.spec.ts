import { TestBed } from '@angular/core/testing';

import { ElearningAboutService } from './elearning-about.service';

describe('ElearningAboutService', () => {
  let service: ElearningAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElearningAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
