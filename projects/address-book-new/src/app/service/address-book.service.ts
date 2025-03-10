import {Injectable} from '@angular/core';
import {Contact} from "../model/contact";
import {BehaviorSubject, catchError, Observable, tap} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  private readonly STORAGE_KEY = 'contacts';

  private readonly API_URL = 'http://localhost:8080';
  private contacts: Contact[] = [];
  private selectedContact!: Contact;
  private isEditMode: boolean = false;

  constructor(private http: HttpClient) {
    this.loadContacts();
  }

  private lastId: number = localStorage.getItem('lastId') ? Number(localStorage.getItem('lastId')) : 0;

  private contactSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(this.contacts);
  private selectedContactSubject: BehaviorSubject<Contact> = new BehaviorSubject<Contact>(this.selectedContact);

  public contacts$: Observable<Contact[]> = this.contactSubject.asObservable();
  public selectedContact$: Observable<Contact> = this.selectedContactSubject.asObservable();

  loadContacts(): void {
    this.http.get<Contact[]>(`${this.API_URL}/contacts`)
      .pipe(
        tap((contacts: Contact[]) => {
          this.contacts = contacts;
          this.contactSubject.next(contacts);
        }),
      ).subscribe();
  }


  getContacts(): Contact[] {
    return this.contacts;
  }

  // Add new contact
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.API_URL}/contacts`, contact)
      .pipe(
        tap(newContact => {
          this.contacts.push(newContact);
          this.contactSubject.next(this.contacts);
          this.selectedContactSubject.next(newContact);
        })
      )
  }

  // Delete contact
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/contacts/${id}`)
      .pipe(
        tap(() => {
          this.contacts = this.contacts.filter(contact => contact.id !== id);
          this.contactSubject.next(this.contacts);
        })
      );
  }

  // Update existing contact
  updateContact(contactId:number,contact: Contact): Observable<Contact> {
    contact.id = contactId;
    return this.http.put<Contact>(`${this.API_URL}/contacts/${contactId}`, contact)
      .pipe(
        tap(updatedContact => {
          const index = this.contacts.findIndex(c => c.id === updatedContact.id);
          if (index !== -1) {
            this.contacts[index] = updatedContact;
            this.contactSubject.next(this.contacts);
            this.selectedContactSubject.next(updatedContact);
          }
        })
      );
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

  getContactByIdFromService(id: number){
    return this.http.get<Contact>(`${this.API_URL}/contacts/${id}`)
  }

  getNextContactId() {
    const index =  this.contacts.findIndex(contact => contact.id === this.selectedContact.id);
    if (index !== -1) {
      if (this.contacts.length === 1) {
        return -1;
      }
      return index === 0 ? 0 : index - 1;
    }
    return -1;
  }
}
