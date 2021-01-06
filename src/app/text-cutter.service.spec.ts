import { TestBed } from '@angular/core/testing';

import { TextCutterService } from './text-cutter.service';

describe('TextCutterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextCutterService = TestBed.get(TextCutterService);
    expect(service).toBeTruthy();
  });
});
