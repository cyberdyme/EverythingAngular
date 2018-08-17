import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { MainToolbarComponent } from './layout/main-toolbar/main-toolbar.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddItUpComponent } from './add-it-up/add-it-up.component';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainToolbarComponent,
    SideNavComponent,
    DashboardComponent,
    AddItUpComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
