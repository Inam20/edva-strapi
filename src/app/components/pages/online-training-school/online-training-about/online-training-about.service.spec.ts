import { TestBed } from '@angular/core/testing';

import { OnlineTrainingAboutService } from './online-training-about.service';

describe('OnlineTrainingAboutService', () => {
  let service: OnlineTrainingAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineTrainingAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
