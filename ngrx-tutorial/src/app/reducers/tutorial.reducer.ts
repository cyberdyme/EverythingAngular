import {Tutorial} from './../models';
import * as Actions from './../actions';
import {createSelector} from '@ngrx/store';

// Section 1
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// Section 2
export function tutorialsReducer(state: Tutorial[] = [initialState], action: Actions.TutorialActions) {

  // Section 3
  switch (action.type) {
    case Actions.ADD_TUTORIAL:
      return [...state, action.payload];

    // Add this case:
    case Actions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
