import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessAdminGuard } from './access-admin.guard';

describe('accessAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
