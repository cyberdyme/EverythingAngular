import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {catchError, startWith} from 'rxjs/internal/operators';
import {LoadedSearchItemsStart, LoadingSearchItems, SearchActionTypes} from '../actions/search.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoadingSearchItems>(SearchActionTypes.LoadingSearchItems),
    startWith(new LoadedSearchItemsStart()),
    switchMap(action =>
      this.searchItemsDataService
        .getItems()
        .pipe(
          map(items => LoadedSearchItemsSuccess({items})),
          catchError(error => observableOf(LoadedSearchItemsFailure({ error })))
        )
    )
  );

  constructor(private actions$: Actions) {
  }
}
