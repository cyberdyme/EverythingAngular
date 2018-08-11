import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromSearchDefaults from './search-master-defaults/actions';
import * as fromSearchProfiles from './search-profiles/actions';

import {of} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {MasterDefaultsService} from './master-defaults-service';
import {ProfilesService} from './profiles-service';

@Injectable()
export class AppEffects {

    @Effect({dispatch: true})
     effectMasterDefault$ = this.actions$.ofType<fromSearchDefaults.Loading>(
       fromSearchDefaults.SearchActionTypes.Loading)
       .pipe( switchMap(() => {
          return this.masterDefaultDataService.getSearchDtos().pipe(
            switchMap(item => [new fromSearchDefaults.Loaded(item)]),
            catchError( error => of(new fromSearchDefaults.LoadFailed(error)))
          );
       }));

  @Effect({dispatch: true})
  effectSearchProfiles$ = this.actions$.ofType<fromSearchProfiles.Loading>(
    fromSearchProfiles.SearchActionTypes.Loading)
    .pipe( switchMap(() => {
      return this.profileDataService.getSearchDtos().pipe(
        switchMap(item => [new fromSearchProfiles.Loaded(item)]),
        catchError( error => of(new fromSearchProfiles.LoadFailed(error)))
      );
    }));

  constructor(private actions$: Actions,
              private masterDefaultDataService: MasterDefaultsService,
              private profileDataService: ProfilesService) {

    }
}
