import { Action } from '@ngrx/store';
import {SearchModel} from '../search.model';

export enum SearchActionTypes {
  LoadingSearchItems = '[Search] Loading Search Items',
  LoadedSearchItemsStart = '[Search] Loaded Start Search Items',
  LoadedSearchItemsSuccess = '[Search] Loaded Search Item',
  LoadedSearchItemsFailure = '[Search] Failure Search Item',
}

export class LoadingSearchItems implements Action {
  readonly type = SearchActionTypes.LoadingSearchItems;
}

export class LoadedSearchItemsStart implements Action {
  readonly type = SearchActionTypes.LoadedSearchItemsStart;
}

export class LoadedSearchItemsSuccess implements Action {
  readonly type = SearchActionTypes.LoadedSearchItemsSuccess;

  constructor(public payload: SearchModel) {
  }
}

export class LoadedSearchItemsFailure implements Action {
  readonly type = SearchActionTypes.LoadedSearchItemsFailure;
  constructor(public payload: SearchModel) {
  }
}


export type SearchActions =
  LoadingSearchItems | LoadedSearchItemsStart | LoadedSearchItemsSuccess | LoadedSearchItemsFailure;
