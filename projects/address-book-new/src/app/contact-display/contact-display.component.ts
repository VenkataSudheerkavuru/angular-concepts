import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteContactComponent} from "../delete-contact/delete-contact.component";

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent implements OnInit{

  constructor(private addressBookService:AddressBookService
              ,private router:Router,private route:ActivatedRoute,
              private dialog:MatDialog) {
  }
  selectedContact!: Contact | undefined ;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if(id){
        this.addressBookService.getContactByIdFromService(Number(id)).subscribe(
          (contact:Contact)=>{
            this.selectedContact = contact
            this.addressBookService.setSelectedContact(contact)
          });
      }
    });
  }

  editContact() {
    this.addressBookService.setIsEditMode(true);
    this.router.navigate(['edit-contact', this.selectedContact?.id]);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteContactComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
