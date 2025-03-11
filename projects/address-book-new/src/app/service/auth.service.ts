import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role : string | null =null

  constructor() { }
   setRole(role: string) {
    this.role = role;
  }
  getRole() {
    return this.role;
  }
}
