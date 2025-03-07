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
  userForm: FormGroup = new FormGroup({});

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
        name: new FormControl('',[ Validators.required,Validators.pattern("[a-zA-Z ]*")]),
        email:new FormControl('', [Validators.required, Validators.email]),
        role: new FormControl('',Validators.required)
      });
      this.mainForm = this.formBuilder.group({
        shipaddress: this.formBuilder.group({
          city: new FormControl('' ),
          pincode: new FormControl('')
        }),
        billingaddress: this.formBuilder.group({
          city: new FormControl(''),
          pincode: new FormControl('')
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
      this.userForm =  this.formBuilder.group({
        addEmail:[false],
        email: ['']
      });
      this.userForm.get('addEmail')?.valueChanges.subscribe((value) => {
        this.toggleEmailField(value);
      });
    }
    setValues(){
      this.simpleForm.setValue({
        name: 'john',
        email: 'abc@a.com',
        role:'admin'
      });
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

  copyShippingAddres() {
    this.mainForm.get('billingaddress')?.setValue(this.mainForm.get('shipaddress')?.value);
  }

  onSubmitcond() {
    alert("form submitted "+this.userForm.value);
  }

   toggleEmailField(value:boolean) {
     const emailControl = this.userForm.get('email');
     if (value) {
       emailControl?.setValidators([Validators.required,Validators.email]);
     } else {
       emailControl?.clearValidators();
     }
     emailControl?.updateValueAndValidity();
  }
}
