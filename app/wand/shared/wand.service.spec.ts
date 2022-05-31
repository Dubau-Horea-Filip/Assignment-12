import { TestBed } from '@angular/core/testing';

import { WandService } from './wand.service';

describe('WandService', () => {
  let service: WandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
