import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(private addressBookService: AddressBookService,private router:Router) {
  }
  contactList: Contact[] = [];
  selectedContact!: Contact;
  ngOnInit(): void {
    this.addressBookService.contacts$.subscribe((contacts: Contact[]) => {
      this.contactList = contacts;
    });
  }

  showContactDetails(contact: Contact) {
    alert(JSON.stringify(contact));
    this.selectedContact = contact;
    this.addressBookService.setSelectedContact(contact);
    this.router.navigate(['/contact-details', contact.id]);
  }
}
