import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canDeactivateAuthGuard } from './can-deactivate-auth.guard';

describe('canDeactivateAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canDeactivateAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
