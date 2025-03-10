import {Component,  OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit{

  contactForm: FormGroup = new FormGroup({});
  isEditMode = false;
  contactId:number = -1;

  constructor(private fb: FormBuilder,
              private addressBookService: AddressBookService
              ,public activeModal: NgbActiveModal,
              private router:Router,
              private route:ActivatedRoute) {

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
      this.addressBookService.setSelectedContact(this.contactForm.value as Contact);
      if (this.isEditMode) {
        this.addressBookService.updateContact(this.contactId,this.contactForm.value).subscribe(
          updatedContact => {
            this.navidateToContactDetails(updatedContact)
          }
        );
      } else {
        this.addContact();
      }
    }
  }

  navidateToContactDetails(contact : Contact){
    this.contactForm.reset();
    this.activeModal.close(this.contactForm.value);
    this.addressBookService.setIsEditMode(false);
    this.router.navigate(['/contact-details', contact.id]);
  }

  addContact(): void {
      this.addressBookService.addContact(this.contactForm.value as Contact).subscribe(
        addedContact => {
          this.navidateToContactDetails(addedContact)
        }
      );
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
