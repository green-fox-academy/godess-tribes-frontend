import { TestBed } from '@angular/core/testing';

import { SoldiersService } from './soldiers.service';

describe('SoldiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoldiersService = TestBed.get(SoldiersService);
    expect(service).toBeTruthy();
  });
});
