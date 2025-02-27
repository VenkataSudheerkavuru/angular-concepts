import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterpolationExampleComponent} from "./interpolation-example/interpolation-example.component";
import {MyFormComponentComponent} from "./my-form-component/my-form-component.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";
import {DashboardSettingsComponent} from "./dashboard-settings/dashboard-settings.component";


const routes: Routes = [
  { path: 'interpolation', component: InterpolationExampleComponent },
  { path: 'formValidations', component: MyFormComponentComponent },
  { path: 'dashboard',component:DashboardComponent ,
    children: [
      {path:'home',component:DashboardHomeComponent},
      {path:'settings',component:DashboardSettingsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
