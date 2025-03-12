import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {UrlEnum} from "../constants/url-enum";
import {AppConstants} from "../constants/AppConstants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  role : string = AppConstants.EMPTY_STRING;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  login() {
      if(this.role){
        this.authService.setRole(this.role);
        this.router.navigate([UrlEnum.BASE_URL]);
      }
  }

}
