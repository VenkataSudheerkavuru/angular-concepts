import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicing-application';
  message = 'Hello World!';

  receiveMessage(message: string) {
    alert(message)
  }
}
