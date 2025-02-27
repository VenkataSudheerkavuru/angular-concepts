import {Component} from '@angular/core';
import {Contact} from "./model/contact";
import {AddressBookService} from "./address-book.service";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book';
  showForm: boolean = false;
  contacts: any[] = [];
  selectedContact: Contact | undefined;

  constructor(private addressBookService: AddressBookService) {
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addContact(contact : any) {
    if(this.addressBookService.getIsModified()){
      this.contacts = this.contacts.filter(c => c !== this.addressBookService.getSelectedContact());
      this.addressBookService.setIsModified(false);
    }
    this.contacts.push(contact.value);
    this.showForm = false
    this.selectedContact = undefined;
  }

  showContact(contact: Contact) {
    this.selectedContact=contact;
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.selectedContact = undefined
  }

  editContact(contact: Contact) {
    this.addressBookService.setSelectedContact(contact);
    this.showForm = true;
    this.selectedContact = undefined
  }
}
