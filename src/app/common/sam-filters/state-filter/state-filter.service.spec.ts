import { TestBed } from '@angular/core/testing';

import { StateFilterService } from './state-filter.service';

describe('StateFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateFilterService = TestBed.get(StateFilterService);
    expect(service).toBeTruthy();
  });
});
