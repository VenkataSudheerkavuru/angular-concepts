import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  constructor(private modalService: NgbModal,
              private router:Router
  ) {}

  ngOnInit(): void {
    const modalRef =this.modalService.open(ContactFormComponent,{
      centered:true,
    });
    modalRef.result.finally(()=>{
      this.router.navigate(['./']);
    });
  }

}
