import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute, NavigationEnd, NavigationStart, Route, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: Contact[] = [];
  selectedContact!: Contact;
  contact!: Contact;

  constructor(private addressBookService: AddressBookService,
              private router:Router,
              private route:ActivatedRoute) {
    this.router.events.subscribe((event)=> {
      if (event instanceof NavigationStart) {
        if (event.url === '/add-contact' || event.url === '/') {
          this.selectedContact = {} as Contact;
        }
      }
    })

  }

  ngOnInit(): void {
    this.addressBookService.contacts$.subscribe((contacts: Contact[]) => {
      this.contactList = contacts;
    });
    this.addressBookService.selectedContact$.subscribe((contact: Contact) => {
      this.selectedContact = contact;
    });
  }

  showContactDetails(contact: Contact) {
    this.selectedContact = contact;
    this.addressBookService.setSelectedContact(contact);
    this.router.navigate(['/contact-details', contact.id]);
  }
}
