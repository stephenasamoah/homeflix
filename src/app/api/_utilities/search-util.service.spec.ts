import { TestBed } from '@angular/core/testing';

import { SearchUtilService } from './search-util.service';

describe('SearchUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchUtilService = TestBed.get(SearchUtilService);
    expect(service).toBeTruthy();
  });
});
