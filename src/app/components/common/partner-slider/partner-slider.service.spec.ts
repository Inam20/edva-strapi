import { TestBed } from '@angular/core/testing';

import { PartnerSliderService } from './partner-slider.service';

describe('PartnerSliderService', () => {
  let service: PartnerSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});