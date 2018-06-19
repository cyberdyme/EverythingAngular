import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SearchActions, SearchActionTypes } from '../actions/search.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  effect$ = this.actions$.ofType(SearchActionTypes.LoadSearchs);

  constructor(private actions$: Actions) {}
}
