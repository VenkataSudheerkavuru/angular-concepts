import { Injectable } from '@angular/core';
import {Contact} from "./model/contact";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor() { }

  private selectedContact : Contact | null = null;

  private isModified: boolean = false;

  getIsModified(){
    return this.isModified;
  }
  setIsModified(isModified: boolean){
    this.isModified = isModified;
  }

  setSelectedContact(contact: Contact){
    this.selectedContact = contact;
  }
  getSelectedContact(){
    return this.selectedContact;
  }

}
