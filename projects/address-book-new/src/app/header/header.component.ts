import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UrlEnum} from "../constants/url-enum";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router : Router) {}

  openAddContactForm() {
    this.router.navigate([UrlEnum.ADD_CONTACT]);
  }

  goToHome() {
    this.router.navigate([UrlEnum.BASE_URL]);
  }
}
