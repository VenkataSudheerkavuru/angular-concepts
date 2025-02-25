import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterpolationExampleComponent} from "./interpolation-example/interpolation-example.component";
import {MyFormComponentComponent} from "./my-form-component/my-form-component.component";


const routes: Routes = [
  { path: 'interpolation', component: InterpolationExampleComponent },
  { path: 'formValidations', component: MyFormComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
