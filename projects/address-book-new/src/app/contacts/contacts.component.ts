import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {NavigationEnd, Route, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: Contact[] = [];
  selectedContact!: Contact;

  constructor(private addressBookService: AddressBookService,private router:Router) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if(event.url === '/add-contact'){
          this.selectedContact = {} as Contact;
        }
      }
    })
  }

  ngOnInit(): void {
    this.addressBookService.contacts$.subscribe((contacts: Contact[]) => {
      this.contactList = contacts;
    });
  }

  showContactDetails(contact: Contact) {
    this.selectedContact = contact;
    this.addressBookService.setSelectedContact(contact);
    this.router.navigate(['/contact-details', contact.id]);
  }
}
