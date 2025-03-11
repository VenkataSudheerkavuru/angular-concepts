import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactDisplayComponent} from "./contact-display/contact-display.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AddContactComponent} from "./add-contact/add-contact.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./auth/auth.guard";
import {adminGuard} from "./auth/admin.guard";

const routes: Routes = [

  {path: '', component: ContactsComponent,canActivate: [authGuard],
    children: [
      {path : 'contact-details/:id',component: ContactDisplayComponent,canActivate: [adminGuard]},
      {path : 'add-contact',component:AddContactComponent,canActivate: [adminGuard]},
      {path : 'edit-contact/:id',component:AddContactComponent,canActivate: [adminGuard]}
    ]
  },
  {path: 'login',component:LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
