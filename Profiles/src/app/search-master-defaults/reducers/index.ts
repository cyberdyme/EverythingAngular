import {SearchMasterActionTypes, SearchMasterDefaultsActionsUnion} from '../actions';

export interface State {
  isShown: boolean;
  title: string;
}

const initialState: State = {
  isShown: true,
  title: 'Global Defaults',
};

export function reducer(
  state: State = initialState,
  action: SearchMasterDefaultsActionsUnion
): State {
  switch (action.type) {
    case SearchMasterActionTypes.SearchMasterDefaultsIsShown:
      return {
        isShown: true,
        title: 'showing'
      };
    case SearchMasterActionTypes.SearchMasterDefaultsIsHidden:
      return {
        isShown: false,
        title: 'hiding'
      };

    default:
      return state;
  }
}


export const getSearchMasterDefaultsIsShown = (state: State) => state.isShown;
