import { Action } from '@ngrx/store';
import {SearchModel} from '../search.model';

export enum SearchActionTypes {
  LoadingSearchItems = '[Search] Loading Search Items',
  LoadedSearchItem = '[Search] Loaded Search Item'
}


export class LoadingSearchItems implements Action {
  readonly type = SearchActionTypes.LoadingSearchItems;
  constructor(public payload: SearchModel) {
  }
}


export class LoadedSearchItem implements Action {
  readonly type = SearchActionTypes.LoadedSearchItem;

  constructor(public payload: SearchModel) {
  }
}

export type SearchActions = LoadingSearchItems | LoadedSearchItem;
