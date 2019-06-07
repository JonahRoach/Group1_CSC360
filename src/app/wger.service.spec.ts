import { TestBed } from '@angular/core/testing';

import { WgerService } from './wger.service';

describe('WgerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WgerService = TestBed.get(WgerService);
    expect(service).toBeTruthy();
  });
});
