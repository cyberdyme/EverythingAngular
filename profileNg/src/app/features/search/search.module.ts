import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {StoreModule} from '@ngrx/store';

import * as fromSearch from './reducers/search.reducer';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature('searchReducer', fromSearch.reducer),
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
