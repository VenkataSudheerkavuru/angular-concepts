import { Injectable } from '@angular/core';
import {Contact} from "./model/contact";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor() { }

  private contacts: Contact[] = []

  private selectedContact : Contact | null = null;

  addContact(contact: Contact){
    this.contacts.push(contact);
  }
  getContacts(){
    return this.contacts;
  }

  setSelectedContact(contact: Contact){
    this.selectedContact = contact;
  }
  getSelectedContact(){
    return this.selectedContact;
  }
  clearSelectedContact(){
    this.selectedContact = null;
  }
}
