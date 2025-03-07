import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactDisplayComponent} from "./contact-display/contact-display.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AddContactComponent} from "./add-contact/add-contact.component";

const routes: Routes = [
  {path: '', component: ContactsComponent,
    children: [
      {path : 'contact-details/:id',component: ContactDisplayComponent},
      {path : 'add-contact',component:AddContactComponent},
      {path : 'edit-contact/:id',component:AddContactComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
