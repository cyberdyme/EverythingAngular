import {Books} from '../models';
import * as Actions from '../actions/books.actions';

const initialState: Books = {
  id: 0,
  title: 'Lord Of The Rings'
};


export function booksReducer(state: Books[] = [initialState], action: Actions.BookActions) {
  switch (action.type) {
    case Actions.LOAD_BOOKS:
      return [...state, action.payload];

    default:
      return state;
  }
}
