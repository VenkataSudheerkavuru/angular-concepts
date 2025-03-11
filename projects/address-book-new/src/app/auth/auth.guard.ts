import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  const requiredRole = authService.getRole();
  if (requiredRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

};
