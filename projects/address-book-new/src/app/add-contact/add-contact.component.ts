import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute} from "@angular/router";
import {Contact} from "../model/contact";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  constructor(private modalService: NgbModal,
              private addressBookService: AddressBookService,
              private route:ActivatedRoute) {}

  contact : Contact = {} as Contact;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.addressBookService.getContactByIdFromService(Number(id)).subscribe(
          (contact) => {
            if (contact) {
              this.addressBookService.setSelectedContact(contact);
              this.addressBookService.setIsEditMode(true);
              this.modalService.open(ContactFormComponent,{
                backdrop:'static',
                centered:true,
              });
            }
          }
        );
      }
      else{
        this.modalService.open(ContactFormComponent,{
          backdrop:'static',
          centered:true,
        });
      }
    });

  }

}
