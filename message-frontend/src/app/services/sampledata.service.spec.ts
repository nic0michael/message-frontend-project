import { TestBed } from '@angular/core/testing';

import { SampledataService } from './sampledata.service';

describe('SampledataService', () => {
  let service: SampledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampledataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
