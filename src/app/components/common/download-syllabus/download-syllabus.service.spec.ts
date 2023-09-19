import { TestBed } from '@angular/core/testing';

import { DownloadSyllabusService } from './download-syllabus.service';

describe('DownloadSyllabusService', () => {
  let service: DownloadSyllabusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadSyllabusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
