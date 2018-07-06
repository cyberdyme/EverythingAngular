import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}