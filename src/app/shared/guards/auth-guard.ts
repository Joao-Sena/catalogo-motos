import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);

  const canAccess = false;

  if (canAccess) {
    return true;
  }

  router.navigate(['home']);
  return false;
};
