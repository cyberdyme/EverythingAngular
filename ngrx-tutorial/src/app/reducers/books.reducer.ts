import * as Actions from '../actions/books.actions';
import {BookState} from './appState';


export const initialState: BookState = {
  id: 0,
  title: 'Lord Of The Rings'
};


export function booksReducer(state: BookState[] = [initialState], action: Actions.BookActions) {
  switch (action.type) {
    case Actions.LOAD_BOOKS:
      return [...state, action.payload];

    default:
      return state;
  }
}
