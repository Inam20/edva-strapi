import { TestBed } from '@angular/core/testing';

import { SelectedAgesService } from './selected-ages.service';

describe('SelectedAgesService', () => {
  let service: SelectedAgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedAgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
