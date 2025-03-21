import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UrlEnum} from "../constants/url-enum";

class DialogAnimationsExampleDialog {
}

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
              private addressBookService : AddressBookService,
              private route: Router) {}

  deleteContact() {
    const nextContactId = this.addressBookService.getNextContactId();
    this.addressBookService.deleteContact(this.addressBookService.getSelectedContact().id)
      .subscribe(() => {
        if(nextContactId === -1){
          this.route.navigate([UrlEnum.BASE_URL]);
        }
        else{
          this.addressBookService.setSelectedContact(this.addressBookService.getContacts()[nextContactId]);
          this.route.navigate([UrlEnum.CONTACT_DETAILS,this.addressBookService.getSelectedContact().id]);
        }
      });

  }
}
