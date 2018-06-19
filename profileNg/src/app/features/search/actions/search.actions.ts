import { Action } from '@ngrx/store';
import {SearchModel} from '../search.model';

export enum SearchActionTypes {
  LoadSearchs = '[Search] Load Searchs'
}

export class LoadSearchs implements Action {
  readonly type = SearchActionTypes.LoadSearchs;

  constructor(public payload: SearchModel) {
  }
}

export type SearchActions = LoadSearchs;
