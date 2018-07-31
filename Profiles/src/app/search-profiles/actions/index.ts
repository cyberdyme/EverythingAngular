import { Action } from '@ngrx/store';

export enum SearchProfilesActionTypes {
  SearchProfilesIsShown = '[Search Profiles] Is Shown',
  SearchProfilesIsHidden = '[Search Profiles] Is Hidden',
}

export class ShowSearchProfiles implements Action {
  readonly type = SearchProfilesActionTypes.SearchProfilesIsShown;
}

export class HideSearchProfiles implements Action {
  readonly type = SearchProfilesActionTypes.SearchProfilesIsHidden;
}

export type SearchProfilesActionsUnion = ShowSearchProfiles | HideSearchProfiles;
