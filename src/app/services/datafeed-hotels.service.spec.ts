import { TestBed } from '@angular/core/testing';

import { DatafeedHotelsService } from './datafeed-hotels.service';

describe('DatafeedHotelsService', () => {
  let service: DatafeedHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatafeedHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
