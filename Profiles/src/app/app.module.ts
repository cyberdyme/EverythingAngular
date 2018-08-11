import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { SearchProfilesComponent } from './search-profiles/search-profiles.component';
import { SearchMasterDefaultsComponent } from './search-master-defaults/search-master-defaults.component';
import {environment} from '../environments/environment.prod';
import {MapToIterable} from './mapToIterable';
import {MasterDefaultsService} from './master-defaults-service';
import {ProfilesService} from './profiles-service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchProfilesComponent,
    SearchMasterDefaultsComponent,
    MapToIterable,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MaterialDesignModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [MasterDefaultsService, ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
