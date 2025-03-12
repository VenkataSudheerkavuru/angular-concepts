import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../service/auth.service";
import {inject} from "@angular/core";
import {UrlEnum} from "../constants/url-enum";
import {AppConstants} from "../constants/AppConstants";

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

 if(localStorage.getItem(AppConstants.ROLE)){
   return true
  } else {
    router.navigate([UrlEnum.LOGIN]);
    return false;
  }

};
