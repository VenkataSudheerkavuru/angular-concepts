import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDisplayComponent } from './contact-display.component';

describe('ContactsDisplayComponentComponent', () => {
  let component: ContactDisplayComponent;
  let fixture: ComponentFixture<ContactDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDisplayComponent]
    });
    fixture = TestBed.createComponent(ContactDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
