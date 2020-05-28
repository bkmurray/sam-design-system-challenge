import { TestBed } from '@angular/core/testing';

import { IntegrityInfoFormService } from './integrity-info-form.service';

describe('IntegrityInfoFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrityInfoFormService = TestBed.get(IntegrityInfoFormService);
    expect(service).toBeTruthy();
  });
});
