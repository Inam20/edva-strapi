import { TestBed } from '@angular/core/testing';

import { HowToApplyService } from './how-to-apply.service';

describe('HowToApplyService', () => {
  let service: HowToApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowToApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
