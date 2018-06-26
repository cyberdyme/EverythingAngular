import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SearchActionTypes } from '../actions/search.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  effect$ = this.actions$.ofType(SearchActionTypes.LoadingSearchItems);

  constructor(private actions$: Actions) {}
}
