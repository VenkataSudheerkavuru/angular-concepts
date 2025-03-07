import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit{

  constructor(private addressBookService:AddressBookService
              ,private router:Router) {
  }
  selectedContact: Contact | undefined ;

  ngOnInit(): void {
      this.selectedContact = this.addressBookService.getSelectedContact();
  }

  editContact() {
    this.addressBookService.setIsEditMode(true);
    this.router.navigate(['edit-contact', this.selectedContact?.id]);
  }

  deleteContact() {
    this.addressBookService.deleteContact(this.selectedContact);
    this.selectedContact = undefined;
    this.addressBookService.setSelectedContact(undefined);
    this.router.navigate(['/'])
  }
}
