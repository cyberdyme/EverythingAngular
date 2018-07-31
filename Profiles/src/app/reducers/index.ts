import * as fromSearchMasterDefaults from '../search-master-defaults/reducers';
import * as fromSearchProfiles from '../search-profiles/reducers';

import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';

export interface State {
  searchMasterDefaults: fromSearchMasterDefaults.State;
  searchProfiles: fromSearchProfiles.State;
}

export const reducers: ActionReducerMap<State> = {
  searchMasterDefaults: fromSearchMasterDefaults.reducer,
  searchProfiles: fromSearchProfiles.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];


export const getSearchMasterDefaultsState = createFeatureSelector<fromSearchMasterDefaults.State>(
  'searchMasterDefaults',
);

export const getSearchProfilesState = createFeatureSelector<fromSearchProfiles.State>(
  'searchProfiles'
);

export const getSearchMasterDefaultsIsShown = createSelector(
  getSearchMasterDefaultsState,
  fromSearchMasterDefaults.getSearchMasterDefaultsIsShown
);

export const getSearchProfilesIsShown = createSelector(
  getSearchProfilesState,
  fromSearchProfiles.getSearchProfilesIsShown
);
