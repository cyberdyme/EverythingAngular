import {Action, createSelector} from '@ngrx/store';
import { SearchActions, SearchActionTypes } from '../actions/search.actions';
import {SearchModel} from '../search.model';

export interface SearchState {
  searchReducer: SearchModel;
}

export const initialState: SearchState = {
  searchReducer: {name: 'test', age: 99 }
};

export function reducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {

    case SearchActionTypes.LoadSearchs:
      console.log('reducing ' + action.payload.name)
      return Object.assign({}, state, action.payload);


    default:
      return state;
  }
}

export const getSearchState = (state: SearchState) => state.searchReducer;
export const searchNames = createSelector(getSearchState, (x: SearchModel)  => x.name);

