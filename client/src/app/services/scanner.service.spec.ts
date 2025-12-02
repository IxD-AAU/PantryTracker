import { TestBed } from '@angular/core/testing';

import { BarcodeScannerService } from './scanner.service';

describe('ScannerService', () => {
  let service: BarcodeScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcodeScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
