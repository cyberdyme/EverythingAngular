import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {SearchActionsUnion, SearchActionTypes} from '../../search-profiles/actions';
import {Profile} from '../models/profiles';

export interface State extends EntityState<Profile> {
  selectedDefaultId: string | null;
  isShown: boolean;
  title: string;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Profile> =
  createEntityAdapter<Profile>({
    selectId: (defaults: Profile) => defaults.id,
    sortComparer: false
  });

const initialState: State = adapter.getInitialState({
  selectedDefaultId: null,
  isShown: true,
  title: 'Profile Defaults',
  isLoading: false
});

export function reducer(
  state: State = initialState,
  action: SearchActionsUnion
): State {
  switch (action.type) {
    case SearchActionTypes.IsShown:
      return {
        ...state,
        isShown: true,
        title: 'showing'
      };
    case SearchActionTypes.IsHidden:
      return {
        ...state,
        isShown: false,
      };
    case SearchActionTypes.Loading:
      return {
        ...state,
        isLoading: true
      };
    case SearchActionTypes.Loaded:
      return adapter.addMany(action.payload, {
        ...state,
        isShown: false
      });
    default:
      return state;
  }
}

export const getSearchProfiles = (state: State) => state;
export const getSearchProfilesIsShown = (state: State) => state.isShown;
