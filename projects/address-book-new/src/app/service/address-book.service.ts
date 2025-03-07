import { Injectable } from '@angular/core';
import {Contact} from "../model/contact";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  private readonly STORAGE_KEY = 'contacts';
  private selectedContact!: Contact ;

  constructor() {
  }
  private contacts: Contact[] = this.loadContacts();

  private lastId: number = localStorage.getItem('lastId') ?
                        Number(localStorage.getItem('lastId')) : 0;

  private isEditMode: boolean = false;

  private contactSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(this.contacts);

  public contacts$:Observable<Contact[]> = this.contactSubject.asObservable();

  private loadContacts(): Contact[] {
    const storedContacts = localStorage.getItem(this.STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  }

  private saveContacts(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.contacts));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
  addContact(contact: Contact): void {
    contact.id = ++this.lastId;
    localStorage.setItem('lastId', this.lastId.toString());
    this.contacts.push(contact);
    this.saveContacts();
    this.contactSubject.next(this.contacts);
  }

  deleteContact(contact: Contact | undefined): void {
    if (!contact){
      return
    }
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.saveContacts();
      this.contactSubject.next(this.contacts);
    }
  }

  updateContact(id: number , contact: Contact): void {
    if (!contact) {
      return;
    }
    if (id !==-1){
      contact.id = id;
      this.contacts = this.contacts.map(c => c.id === id ? contact : c);
      this.saveContacts();
      this.contactSubject.next(this.contacts);
    }
  }
  setSelectedContact(contact: Contact) {
    this.selectedContact = contact;
  }
  getSelectedContact() {
    return this.selectedContact;
  }

  getIsEditMode() {
    return this.isEditMode;
  }
  setIsEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
  }

  getContactById(contactId: number) {
    return this.contacts.find(contact => contact.id === Number(contactId));
  }
}
