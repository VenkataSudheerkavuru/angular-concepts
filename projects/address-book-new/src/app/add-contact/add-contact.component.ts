import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.modalService.open(ContactFormComponent,{
      backdrop:'static',
      centered:true,
    });
  }

}
