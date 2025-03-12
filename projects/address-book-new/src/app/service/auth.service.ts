import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AppConstants} from "../constants/AppConstants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   setRole(role: string) {
    localStorage.setItem(AppConstants.ROLE, role);
  }
}
