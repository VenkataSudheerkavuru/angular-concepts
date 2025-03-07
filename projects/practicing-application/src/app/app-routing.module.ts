import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterpolationExampleComponent} from "./interpolation-example/interpolation-example.component";
import {MyFormComponentComponent} from "./my-form-component/my-form-component.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {DashboardSettingsComponent} from "./dashboard-settings/dashboard-settings.component";
import {DashboardUserComponentComponent} from "./dashboard-user-component/dashboard-user-component.component";


const routes: Routes = [
  { path: 'interpolation', component: InterpolationExampleComponent },
  { path: 'formValidations', component: MyFormComponentComponent },
  { path: 'dashboard',component:DashboardComponent ,
    children: [
      {path:'home',component:DashboardHomeComponent },
      {path:'user/:id',component:DashboardUserComponentComponent},
      {path:'settings',component:DashboardSettingsComponent}
    ]},
  {path:'redirect',redirectTo:'interpolation',pathMatch:'full'},
  {path:'**',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
