import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CardViewComponent} from "./cart/card-view/card-view.component"

const routes: Routes = [
  {path : '',redirectTo : '/products',pathMatch:"full"},
  {path : 'products' , component: ProductListComponent},
  {path : 'cart',component:CardViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
