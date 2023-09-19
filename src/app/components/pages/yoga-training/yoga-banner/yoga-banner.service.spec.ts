import { TestBed } from '@angular/core/testing';

import { YogaBannerService } from './yoga-banner.service';

describe('YogaBannerService', () => {
  let service: YogaBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YogaBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
