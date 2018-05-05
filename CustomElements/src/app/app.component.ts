import {Component, Injector} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertElement);

    setTimeout(() => {
       this.content = 'blah';
       this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message=\'Rendered dynamically\'></my-alert>');
       console.log('render the alter');
    }, 1000);
  }
}
