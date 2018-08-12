import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {SearchActionTypes, SearchActionsUnion} from '../actions';
import {MasterDefault} from '../models/master-defaults';


export interface State extends EntityState<MasterDefault> {
  selectedDefaultId: string | null;
  isShown: boolean;
  title: string;
  isLoading: boolean;
}

export const adapter: EntityAdapter<MasterDefault> =
  createEntityAdapter<MasterDefault>({
    selectId: (defaults: MasterDefault) => defaults.id,
    sortComparer: false
  });

const initialState: State = adapter.getInitialState({
  selectedDefaultId: null,
  isShown: true,
  title: 'Global Defaults',
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
        isShown: false
      };
    case SearchActionTypes.Loading:
      return {
        ...state,
        isLoading: true
      };
    case SearchActionTypes.Loaded:
      return adapter.addMany(action.payload,  {
        ...state,
        isShown: false
      });
    default:
      return state;
  }
}

export const getSearchMasterDefaults = (state: State) => state;
export const getSearchMasterDefaultsIsShown = (state: State) => state.isShown;
