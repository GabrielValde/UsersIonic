import { TestBed } from '@angular/core/testing';

import { LoginHijoGuard } from './login-hijo.guard';

describe('LoginHijoGuard', () => {
  let guard: LoginHijoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginHijoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
