import * as Actions from './../actions';
import {TutorialState} from './appState';


export const initialState: TutorialState = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

export function tutorialsReducer(state: TutorialState[] = [initialState], action: Actions.TutorialActions) {
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
