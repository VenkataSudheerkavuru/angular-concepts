import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
    constructor(private router : Router) {
    }

    logout() {
        localStorage.removeItem('isAuthenticated');
        this.router.navigate(['/login']);
    }
}
