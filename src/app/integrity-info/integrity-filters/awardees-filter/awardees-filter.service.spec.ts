import { TestBed } from '@angular/core/testing';

import { AwardeesFilterService } from './awardees-filter.service';

describe('AwardeesFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwardeesFilterService = TestBed.get(AwardeesFilterService);
    expect(service).toBeTruthy();
  });
});
