import { TestBed } from '@angular/core/testing';

import { YogaAboutService } from './yoga-about.service';

describe('YogaAboutService', () => {
  let service: YogaAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YogaAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
