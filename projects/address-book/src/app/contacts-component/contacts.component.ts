import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  showContactDetails(contact: Contact) {
     this.showContactDetailsEvent.emit(contact)
  }
}
