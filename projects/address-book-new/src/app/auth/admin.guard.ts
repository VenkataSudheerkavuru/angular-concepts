import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AppConstants} from "../constants/AppConstants";
import {RoleEnum} from "../constants/role-enum";
import {UrlEnum} from "../constants/url-enum";

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  function isAdmin() {
    let userRole=localStorage.getItem(AppConstants.ROLE)
    return userRole === RoleEnum.ADMIN;
  }
  if(isAdmin()){
    return true;
  }
  else{
    alert(AppConstants.NOT_AUTHORIZED);
    router.navigate([UrlEnum.BASE_URL]);
    return false;
  }

};
