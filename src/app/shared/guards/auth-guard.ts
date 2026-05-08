import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  // ROUTER Injection
  const router = inject(Router);

  // Acesso
  const canAccess = false;

  if(canAccess) {
    return true;
  } else {
    router.navigate(['home']);
    return false;
  }

};
