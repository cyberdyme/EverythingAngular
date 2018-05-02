import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions.component';
import {CommonModule} from '@angular/common';
import {DataTemplateDirective} from './data-template.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    DataTemplateDirective
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
