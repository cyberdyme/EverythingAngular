import {Action} from '@ngrx/store';
import {MasterDefault} from '../models/master-defaults';

export enum SearchActionTypes {
  IsShown = '[Search Master Defaults] Is Shown',
  IsHidden = '[Search Master Defaults] Is Hidden',
  Loading = '[Search Master Defaults] Loading',
  Loaded = '[Search Master Defaults] Loaded',
  LoadFailed = '[Search Master Defaults] Load Failed'
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

  constructor(public payload: MasterDefault[]) {
  }
}

export class LoadFailed implements Action {
  readonly type = SearchActionTypes.LoadFailed;

  constructor(public payload: MasterDefault) {

  }
}

export type SearchActionsUnion = Show | Hide | Loading | Loaded | LoadFailed;
