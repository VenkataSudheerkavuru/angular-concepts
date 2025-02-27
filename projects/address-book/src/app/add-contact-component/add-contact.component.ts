import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgForm} from "@angular/forms";
import {Contact} from "../model/contact";
import {AddressBookService} from "../address-book.service";

@Component({
  selector: 'app-add-contact-component',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() addContactEvent = new EventEmitter<any>();

  selectedContact:Contact={
    name: "",
    mobile:"",
    email:"",
    address:"",
    landline:"",
    website:""
  };
  constructor(private addressBookService: AddressBookService) {
  }
  onSubmit(myForm: NgForm) {
    this.addContactEvent.emit(myForm);
    myForm.resetForm();
  }

  ngOnInit(): void {
    const selectedContact = this.addressBookService.getSelectedContact();
    if (selectedContact) {
      this.addressBookService.setIsModified(true);
      this.selectedContact = {...selectedContact};
    }
  }
}
