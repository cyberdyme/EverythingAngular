import {SearchProfilesActionTypes, SearchProfilesActionsUnion} from '../actions';

export interface State {
  isShown: boolean;
}

const initialState: State = {
  isShown: true,
}

export function reducer(state: State = initialState, action: SearchProfilesActionsUnion): State {
  switch (action.type) {
    case SearchProfilesActionTypes.SearchProfilesIsShown:
      return {
        isShown: true,
      };
    case SearchProfilesActionTypes.SearchProfilesIsHidden:
      return {
        isShown: false,
      };

    default:
      return state;
  }
}

export const getSearchProfilesIsShown = (state: State) => state.isShown;
