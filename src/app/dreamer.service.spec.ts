import { TestBed } from '@angular/core/testing';

import { DreamerService } from './dreamer.service';

describe('DreamerService', () => {
  let service: DreamerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreamerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
