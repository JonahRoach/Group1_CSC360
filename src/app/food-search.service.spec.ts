import { TestBed } from '@angular/core/testing';

import { FoodSearchService } from './food-search.service';

describe('FoodSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodSearchService = TestBed.get(FoodSearchService);
    expect(service).toBeTruthy();
  });
});
