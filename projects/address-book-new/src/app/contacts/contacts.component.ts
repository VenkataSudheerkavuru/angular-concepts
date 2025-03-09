import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: Contact[] = [];
  selectedContact!: Contact;

  constructor(private addressBookService: AddressBookService,private router:Router,private route:ActivatedRoute) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if(event.url === '/add-contact'  || event.url === '/'){
          this.selectedContact = {} as Contact;
        }
        else if (event.url.match(/^\/contact-details\/\d+$/)) {
          // If you want to extract the ID from the URL
          const id = event.url.split('/').pop();
          // Do something with the ID if needed
          const contact = this.addressBookService.getContactById(Number(id));
          if(contact) {
            addressBookService.setSelectedContact(contact);
          }else{
            const maxId = addressBookService.getContacts().length-1;
            if(maxId >= 0){
              addressBookService.setSelectedContact(addressBookService.getContacts()[maxId]);
              router.navigate(['/contact-details', addressBookService.getSelectedContact().id]);
            }else {
              router.navigate(['/']);
            }
          }
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
