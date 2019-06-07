import { TestBed } from '@angular/core/testing';

import { SaveUserDataService } from './save-user-data.service';

describe('SaveUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveUserDataService = TestBed.get(SaveUserDataService);
    expect(service).toBeTruthy();
  });
});
