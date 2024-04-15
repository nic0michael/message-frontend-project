import { TestBed } from '@angular/core/testing';

import { DisplpageService } from './displpage.service';

describe('DisplpageService', () => {
  let service: DisplpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
