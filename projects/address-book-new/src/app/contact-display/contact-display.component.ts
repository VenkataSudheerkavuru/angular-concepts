import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteContactComponent} from "../delete-contact/delete-contact.component";
import {AppConstants} from "../constants/AppConstants";
import {RoleEnum} from "../constants/role-enum";
import {UrlEnum} from "../constants/url-enum";

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
  isAdmin: boolean=false;

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem(AppConstants.ROLE) === RoleEnum.ADMIN;
    this.route.params.subscribe((params) => {
      const id = params[AppConstants.ID];
      if(id) {
        this.addressBookService.getContactByIdFromService(Number(id)).subscribe({
          next: (contact: Contact) => {
              this.selectedContact = contact;
              this.addressBookService.setSelectedContact(contact);
          },
          error: (error) => {
            const maxId = this.addressBookService.getContacts().length-1;
            if(maxId >= 0){
              this.addressBookService.setSelectedContact(this.addressBookService.getContacts()[maxId]);
              this.router.navigate([UrlEnum.CONTACT_DETAILS, this.addressBookService.getSelectedContact().id]);
            }else {
              this.router.navigate([UrlEnum.BASE_URL]);
            }
          }
        });
      }
    });
  }

  editContact() {
    this.addressBookService.setIsEditMode(true);
    this.router.navigate([UrlEnum.EDIT_CONTACT, this.selectedContact?.id]);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteContactComponent, {
      width: AppConstants.WIDTH,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
