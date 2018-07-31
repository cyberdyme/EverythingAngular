import { Action } from '@ngrx/store';

export enum SearchMasterActionTypes {
  SearchMasterDefaultsIsShown = '[Search Master Defaults] Is Shown',
  SearchMasterDefaultsIsHidden = '[Search Master Defaults] Is Hidden',
}

export class ShowSearchMasterDefaults implements Action {
  readonly type = SearchMasterActionTypes.SearchMasterDefaultsIsShown;
}

export class HideSearchMasterDefaults implements Action {
  readonly type = SearchMasterActionTypes.SearchMasterDefaultsIsHidden;
}

export type SearchMasterDefaultsActionsUnion = ShowSearchMasterDefaults | HideSearchMasterDefaults;
