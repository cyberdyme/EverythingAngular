import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomMaterialModule} from './custom-material.module';
import {MainToolbarComponent} from './main-toolbar.component';
import {SidenavComponent} from './sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
