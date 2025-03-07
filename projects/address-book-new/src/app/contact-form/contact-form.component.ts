import {Component,  OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit{

  contactForm: FormGroup = new FormGroup({});
  contact: Contact | undefined;
  isEditMode = false;
  contactId:number = -1;

  constructor(private fb: FormBuilder,
              private addressBookService: AddressBookService
              ,public activeModal: NgbActiveModal,
              private router:Router) {

    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      landline: [''],
      website: [''],
      address: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      if (this.isEditMode) {
        this.addressBookService.updateContact(this.contactId,this.contactForm.value);
      } else {
        this.addContact();
      }
      this.addressBookService.setIsEditMode(false);
      this.contactForm.reset();
      this.activeModal.close(this.contactForm.value);
      this.router.navigate(['/']);
    }
  }

  addContact(): void {
      this.addressBookService.addContact(this.contactForm.value as Contact)
      this.activeModal.close(this.contactForm.value);
  }

  ngOnInit() {
    this.isEditMode = this.addressBookService.getIsEditMode();
    if (this.isEditMode) {
      const contact = this.addressBookService.getSelectedContact();
      if (contact) {
        this.contactId = contact.id;
        this.contactForm.patchValue(contact);
      }
    }
  }

  onCancel() {
    this.addressBookService.setIsEditMode(false);
    this.activeModal.close(this.contactForm.value);
    this.router.navigate(['/']);
  }

}
