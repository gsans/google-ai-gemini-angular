import { TestBed } from '@angular/core/testing';

import { FileConversionService } from './file-conversion.service';

describe('FileConversionService', () => {
  let service: FileConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
