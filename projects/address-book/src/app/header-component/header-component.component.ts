import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  @Output() toggleFormEvent = new EventEmitter<any>();

  onClick() {
    this.toggleFormEvent.emit()
  }
}
