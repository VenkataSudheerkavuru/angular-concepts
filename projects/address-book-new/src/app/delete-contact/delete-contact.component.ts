import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AddressBookService} from "../service/address-book.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    this.addressBookService.deleteContact(this.addressBookService.getSelectedContact());
    if(nextContactId === -1){
      this.route.navigate(['/']);
    }
    else{
      this.addressBookService.setSelectedContact(this.addressBookService.getContacts()[nextContactId]);
      this.route.navigate(['/contact-details',this.addressBookService.getSelectedContact().id]);
    }
  }
}
