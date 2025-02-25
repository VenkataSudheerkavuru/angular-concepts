import {AbstractControl, ValidationErrors} from "@angular/forms";


export function customValidation(control : AbstractControl) {
  if (control.value === 'test') {
    return {customValidation: true};
  }
  return null;

}

export function crossFieldValidation(control : AbstractControl):ValidationErrors|null{
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if(password !== confirmPassword){
    return {crossFieldValidation: true};
  }
  return null;
}
