import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent {
 private title = 'Profile NG';
 private mainIcon = 'menu';

 @Output() onShowSideNav: EventEmitter<any> = new EventEmitter<any>();

 public showSideNav(): void {
   this.onShowSideNav.emit();
 }
}
