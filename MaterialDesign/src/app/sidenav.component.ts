import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @ViewChild('sidenav')
  private sideNavInstance: MatSidenav;

  public showSideNav(): void {
      this.sideNavInstance.toggle();
  }
}
