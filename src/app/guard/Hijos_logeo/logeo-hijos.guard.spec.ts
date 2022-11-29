import { TestBed } from '@angular/core/testing';

import { LogeoHijosGuard } from './logeo-hijos.guard';

describe('LogeoHijosGuard', () => {
  let guard: LogeoHijosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogeoHijosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
