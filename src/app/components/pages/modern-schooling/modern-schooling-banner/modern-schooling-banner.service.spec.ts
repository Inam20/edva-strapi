import { TestBed } from '@angular/core/testing';

import { ModernSchoolingBannerService } from './modern-schooling-banner.service';

describe('ModernSchoolingBannerService', () => {
  let service: ModernSchoolingBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModernSchoolingBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
