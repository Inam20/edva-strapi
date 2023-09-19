import { TestBed } from '@angular/core/testing';

import { TestimonialsStyleTwoService } from './testimonials-style-two.service';

describe('TestimonialsStyleTwoService', () => {
  let service: TestimonialsStyleTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialsStyleTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
