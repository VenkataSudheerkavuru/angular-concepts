import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactDisplayComponent} from "./contact-display-component/contact-display.component";
import {AddContactComponent} from "./add-contact-component/add-contact.component";
import {ContactsComponent} from "./contacts-component/contacts.component";

const routes: Routes = [
  {path : "contact" , component: ContactsComponent},
  {path : "add-contact", component : AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
