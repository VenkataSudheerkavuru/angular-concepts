import {Component,  OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit{

  contactForm: FormGroup = new FormGroup({});
  contact: Contact | undefined;

  constructor(private fb: FormBuilder,
              private addressBookService: AddressBookService
              ,public activeModal: NgbActiveModal,
              private route: ActivatedRoute,
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
      const contactData = this.contactForm.value;
      if (this.addressBookService.getIsEditMode()) {
        this.addressBookService.updateContact(contactData);
        this.activeModal.close(this.contactForm.value);
        this.addressBookService.setIsEditMode(false);
        this.addressBookService.setSelectedContact(undefined);
        this.router.navigate(['/']);
      } else {
        this.addContact();
      }
  }

  addContact(): void {
    if (this.contactForm.valid) {
      this.addressBookService.addContact(this.contactForm.value as Contact)
      this.activeModal.close(this.contactForm.value);
    }
  }

  ngOnInit(): void {
    this.contact=this.addressBookService.getSelectedContact();
    if (this.contact && this.addressBookService.getIsEditMode()) {
      this.contactForm.patchValue(this.contact);
    }
  }

}


