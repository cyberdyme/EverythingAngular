import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SearchActions, SearchActionTypes } from '../actions/search.actions';
import {defaultSearchState, SearchState} from '../state/search.state';
import {createEntityAdapter} from '@ngrx/entity';
import {SearchModel} from '../search.model';

export const searchStateAdapter = createEntityAdapter<SearchModel>();
export const initialState: SearchState = searchStateAdapter.getInitialState(defaultSearchState);

export function reducer(state = initialState, action: SearchActions): SearchState {
  switch (action.type) {

    case SearchActionTypes.LoadedSearchItem:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export const getSearchState = createFeatureSelector<SearchState>('searchModels');
/* export const getAllSearchItems = createSelector(SearchState, (x: SearchState) => x.entities.select(y => y.valueOf()));
*/

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = searchStateAdapter.getSelectors(getSearchState);
