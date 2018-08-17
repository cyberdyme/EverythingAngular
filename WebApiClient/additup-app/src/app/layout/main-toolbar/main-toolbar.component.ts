import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent {
  public title = 'BNP Add It Up Demo';
  public mainIcon = 'menu';

  @Output()
  showSideNavControl: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  public showSideNav() {
    this.showSideNavControl.emit();
  }
}
