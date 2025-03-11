import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)

  function isAdmin() {
    const userRole = authService.getRole();
    return userRole === 'admin';
  }
  if(isAdmin()){
    return true;
  }
  else{
    alert("You are not authorized to access this page");
    return false;
  }

};
