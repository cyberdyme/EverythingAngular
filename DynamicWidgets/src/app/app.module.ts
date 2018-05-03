import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WidgetBaseComponent } from './widget-base.component';
import { WidgetButtonComponent } from './widget-button.component';
import { WidgetContainerComponent } from './widget-container.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetBaseComponent,
    WidgetButtonComponent,
    WidgetContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    WidgetButtonComponent
  ]
})
export class AppModule { }
