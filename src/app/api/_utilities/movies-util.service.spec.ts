import { TestBed } from '@angular/core/testing';

import { MoviesUtilService } from './movies-util.service';

describe('MoviesUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesUtilService = TestBed.get(MoviesUtilService);
    expect(service).toBeTruthy();
  });
});
