import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';

import {ReadComponent} from './read/read.component';
import {CreateComponent} from './create/create.component';


import {tutorialReducer, booksReducer} from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: tutorialReducer,
      books: booksReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
