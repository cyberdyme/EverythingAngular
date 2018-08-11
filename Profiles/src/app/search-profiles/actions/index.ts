import { Action } from '@ngrx/store';
import {Profile} from '../models/profiles';


export enum SearchActionTypes {
  IsShown = '[Search Profiles] Is Shown',
  IsHidden = '[Search Profiles] Is Hidden',
  Loading = '[Search Profiles] Loading',
  Loaded = '[Search Profiles] Loaded',
  LoadFailed = '[Search Profiles] Load Failed'
}

export class Show implements Action {
  readonly type = SearchActionTypes.IsShown;
}

export class Hide implements Action {
  readonly type = SearchActionTypes.IsHidden;
}

export class Loading implements Action {
  readonly type = SearchActionTypes.Loading;
}

export class Loaded implements Action {
  readonly type = SearchActionTypes.Loaded;

  constructor(public payload: Profile[]) {
  }
}

export class LoadFailed implements Action {
  readonly type = SearchActionTypes.LoadFailed;

  constructor(public payload: Profile) {

  }
}

export type SearchActionsUnion = Show | Hide | Loading | Loaded | LoadFailed;

