import { TestBed } from '@angular/core/testing';

import { ResponseInterceptor } from './response.interceptor.service';

describe('ResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseInterceptor = TestBed.get(ResponseInterceptor);
    expect(service).toBeTruthy();
  });
});
