import { TestBed } from '@angular/core/testing';

import { KindergartenServicesService } from './kindergarten-services.service';

describe('KindergartenServicesService', () => {
  let service: KindergartenServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindergartenServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
