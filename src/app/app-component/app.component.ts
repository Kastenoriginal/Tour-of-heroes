import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ENTRIES} from './menu-entries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of Heroes';
  menuEntries = ENTRIES;
  @Input() cssClass = 'default';
  @Output() cssClassChange = new EventEmitter<string>();

  changeTheme(cssClass: string) {
    this.cssClass = cssClass;
    this.cssClassChange.emit(cssClass);
  }
}
