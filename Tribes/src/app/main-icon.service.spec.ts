import { TestBed } from '@angular/core/testing';

import { MainIconService } from './main-icon.service';

describe('MainIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainIconService = TestBed.get(MainIconService);
    expect(service).toBeTruthy();
  });
});
