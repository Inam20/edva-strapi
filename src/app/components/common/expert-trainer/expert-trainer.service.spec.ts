import { TestBed } from '@angular/core/testing';

import { ExpertTrainerService } from './expert-trainer.service';

describe('ExpertTrainerService', () => {
  let service: ExpertTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
