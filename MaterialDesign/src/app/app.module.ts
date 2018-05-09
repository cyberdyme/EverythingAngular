import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomMaterialModule} from './custom-material.module';
import {MainToolbarComponent} from './main-toolbar.component';
import {SideNavContentComponent} from './sidenav-content.component';
import {MainContentComponent} from './main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    SideNavContentComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
