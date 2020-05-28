import { TestBed } from '@angular/core/testing';

import { IntegrityEditorServiceService } from './integrity-editor-service.service';

describe('IntegrityEditorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrityEditorServiceService = TestBed.get(IntegrityEditorServiceService);
    expect(service).toBeTruthy();
  });
});
