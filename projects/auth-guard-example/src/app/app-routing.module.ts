import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PublicComponent} from "./public/public.component";
import {ProtectedComponent} from "./protected/protected.component";
import {authGuard} from "./auth.guard";
import {canDeactivateAuthGuard} from "./auths/can-deactivate-auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path : 'public' , component : PublicComponent , canDeactivate:[canDeactivateAuthGuard]},
  { path : 'protected' , component : ProtectedComponent , canActivate : [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
