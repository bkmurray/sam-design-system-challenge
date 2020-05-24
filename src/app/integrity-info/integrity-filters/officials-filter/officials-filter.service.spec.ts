import { TestBed } from '@angular/core/testing';

import { OfficialsFilterService } from './officials-filter.service';

describe('OfficialsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficialsFilterService = TestBed.get(OfficialsFilterService);
    expect(service).toBeTruthy();
  });
});
