import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "../model/contact";

@Component({
  selector: 'app-contacts-display-component',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent {
  @Input() selectedContact!: Contact ;

  @Output() deleteContactEvent = new EventEmitter<Contact>();
  @Output() editContactEvent = new EventEmitter<Contact>();

  deleteContact() {
    this.deleteContactEvent.emit(this.selectedContact);
  }

  editContact() {
    this.editContactEvent.emit(this.selectedContact);
  }
}
