import { TestBed } from '@angular/core/testing';

import { UserDataCRUDService } from './user-data-crud.service';

describe('UserDataCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataCRUDService = TestBed.get(UserDataCRUDService);
    expect(service).toBeTruthy();
  });
});
