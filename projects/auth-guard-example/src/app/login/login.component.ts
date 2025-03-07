import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userName: string ="";
    constructor(private router : Router) {
    }

    login() {
      if(this.userName === "admin") {
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/protected']);
      }
      this.userName = ""
    }
}
