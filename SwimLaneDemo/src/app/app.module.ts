import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgxUIModule} from '@swimlane/ngx-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
