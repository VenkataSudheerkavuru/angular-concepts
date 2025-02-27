import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {crossFieldValidation, customValidation} from "../validations/validator";

@Component({
  selector: 'app-my-form-component',
  templateUrl: './my-form-component.component.html',
  styleUrls: ['./my-form-component.component.css']
})
export class MyFormComponentComponent implements OnInit{

    formSubmitted = false;

    simpleForm : FormGroup = new FormGroup({});
    mainForm : FormGroup = new FormGroup({});
    customForm: FormGroup = new FormGroup({});
  crossFieldForm : FormGroup = new FormGroup({});
  dynamicForm: FormGroup = new FormGroup({});
  formModel: FormGroup = new FormGroup({});
  controlCount = 0;

  onSubmit(form: any, event: Event) {
      if (form.valid) {
        this.formSubmitted = true;
        console.log('Form Submitted!', form.value);
        console.log('Event:type', event.type);
      } else {
        this.formSubmitted = false;
      }
    }
    onSubmiting(){
      if (this.simpleForm.valid ) {
        alert("form submitted "+this.simpleForm.value.name);
        this.simpleForm.reset();
      }
      if(this.mainForm.valid){
        alert("form submitted "+this.mainForm.value.personalDetails.firstName);
        this.mainForm.reset();
      }
    }
  constructor(
    private formBuilder: FormBuilder){
  }

    ngOnInit(): void {
      this.simpleForm = this.formBuilder.group({
        name: new FormControl('john',[ Validators.required,Validators.pattern("[a-zA-Z ]*")]),
        email:new FormControl('', [Validators.required, Validators.email]),
        role: new FormControl('',Validators.required)
      });
      this.mainForm = this.formBuilder.group({
        personalDetails: this.formBuilder.group({
          firstName: new FormControl('', Validators.required),
          lastName: new FormControl('', Validators.required)
        }),
        contactDetails: this.formBuilder.group({
          email: new FormControl('', [Validators.required, Validators.email]),
          phone: new FormControl('', Validators.required)
        })
      });
      this.customForm = this.formBuilder.group({
        name: new FormControl('', [customValidation]),
      });
      this.crossFieldForm = this.formBuilder.group({
        password : new FormControl('',Validators.required),
        confirmPassword : new FormControl('',Validators.required)
      },
        {validators: crossFieldValidation});
    }

  addDynamicField() {
      const controlName = `newField${this.controlCount}`
      this.controlCount++;
    this.dynamicForm.addControl(controlName, new FormControl('', Validators.required));
  }

  onSubmitFormModel(){
    if (this.formModel.valid) {
      alert("form submitted "+this.formModel.value);
      this.formModel.reset();
    }
  }

}
