import {Component} from '@angular/core';

@Component({
  selector: 'app-public', templateUrl: './public.component.html', styleUrls: ['./public.component.css']
})
export class PublicComponent {

  formValue: string = "";

  canDeactivate(): boolean {
    if (this.formValue) {
      return confirm("Are you sure you want to leave this page?");
    }
    return true;
  }

}
