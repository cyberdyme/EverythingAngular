import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as fromRoot from './reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromMasterDefaultsActions from './search-master-defaults/actions';
import * as fromProfilesActions from './search-profiles/actions';
import {tap} from 'rxjs/internal/operators';
import {MasterDefault} from './search-master-defaults/models/master-defaults';
import {Profile} from './search-profiles/models/profiles';
import {Dictionary} from '@ngrx/entity/src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sideNav') public sideNav;

  searchProfilesFlag: boolean;
  searchMasterDefaultsFlag: boolean;

  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private showMasterDefaults$: Observable<any>;
  private showProfiles$: Observable<any>;

  private masterDefaultsEntities$: Observable<Dictionary<MasterDefault>>;
  private profileEntities$: Observable<Dictionary<Profile>>;

  constructor(private store: Store<fromRoot.State>, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  searchSelectionChanged(): void {
    if (this.searchProfilesFlag || this.searchMasterDefaultsFlag) {
      this.sideNav.opened = true;
      return;
    }

    this.sideNav.opened = false;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.masterDefaultsEntities$ = this.store.pipe(
      select(fromRoot.getSearchMasterDefaultsEntitiesState),
      tap(x => {
        console.log('getSearchMasterDefaultsEntitiesState =' + x);
      }));

    this.showMasterDefaults$ = this.store.pipe(
      select(fromRoot.getSearchMasterDefaults),
      tap(x => {
        console.log('getSearchMasterDefaults =' + x);
      }));

    this.profileEntities$ = this.store.pipe(
      select(fromRoot.getSearchProfilesEntitiesState),
      tap(x => {
        console.log('getSearchProfilesEntitiesState =' + x);
      }));


    this.showProfiles$ = this.store.pipe(select(fromRoot.getSearchProfiles),
      tap(x => {
        console.log('getSearchProfiles =' + x);
      }));

    this.store.dispatch(new fromMasterDefaultsActions.Hide());
    this.store.dispatch(new fromMasterDefaultsActions.Loading());

    this.store.dispatch(new fromProfilesActions.Hide());
    this.store.dispatch(new fromProfilesActions.Loading());
  }
}
