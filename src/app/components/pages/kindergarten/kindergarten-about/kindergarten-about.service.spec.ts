import { TestBed } from '@angular/core/testing';

import { KindergartenAboutService } from './kindergarten-about.service';

describe('KindergartenAboutService', () => {
  let service: KindergartenAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
