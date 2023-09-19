import { TestBed } from '@angular/core/testing';

import { ModernSchoolingAboutService } from './modern-schooling-about.service';

describe('ModernSchoolingAboutService', () => {
  let service: ModernSchoolingAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModernSchoolingAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
