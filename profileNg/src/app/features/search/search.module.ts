import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {StoreModule} from '@ngrx/store';
import * as fromSearch from './reducers/search.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SearchEffects} from './effects/search.effects';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('searchModels', fromSearch.reducer),
    EffectsModule.forRoot([SearchEffects])
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
