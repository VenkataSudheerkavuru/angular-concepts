import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../address-book.service";

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  @Input() contactList!: Contact[];
  @Output() showContactDetailsEvent = new EventEmitter<Contact>();

  selectedContact : Contact | null = null;
  showContactDetails(contact: Contact) {
    this.selectedContact = contact;
    this.showContactDetailsEvent.emit(contact)
  }
}
