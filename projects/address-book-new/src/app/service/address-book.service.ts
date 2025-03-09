import {Injectable} from '@angular/core';
import {Contact} from "../model/contact";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  private readonly STORAGE_KEY = 'contacts';

  private selectedContact!: Contact;

  private apiUrl = "http://localhost:8080";

  constructor(private  http : HttpClient) { }

  private contacts: Contact[] = this.loadContacts();

  private lastId: number = localStorage.getItem('lastId') ? Number(localStorage.getItem('lastId')) : 0;

  private isEditMode: boolean = false;

  private contactSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(this.contacts);
  private selectedContactSubject: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(this.selectedContact);

  public contacts$: Observable<Contact[]> = this.contactSubject.asObservable();
  public selectedContact$: Observable<Contact> = this.selectedContactSubject.asObservable();

  private loadContacts(): Contact[] {
    // const storedContacts = localStorage.getItem(this.STORAGE_KEY);
    // return storedContacts ? JSON.parse(storedContacts) : [];
    return  this.http.get<Contact[]>(this.apiUrl + "/contacts");
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
    if (!contact) {
      return
    }
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.saveContacts();
      this.contactSubject.next(this.contacts);
    }
  }

  updateContact(id: number, contact: Contact): void {
    if (!contact) {
      return;
    }
    if (id !== -1) {
      contact.id = id;
      this.contacts = this.contacts.map(c => c.id === id ? contact : c);
      this.saveContacts();
      this.contactSubject.next(this.contacts);
    }
  }

  setSelectedContact(contact: Contact) {
    this.selectedContact = contact;
    this.selectedContactSubject.next(contact);
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

  getNextContactId() {
    const index = this.contacts.indexOf(this.selectedContact);
    if (index !== -1) {
      if (this.contacts.length === 1) {
        return -1;
      }
      return index === 0 ? 0 : index - 1;
    }
    return -1;
  }
}
