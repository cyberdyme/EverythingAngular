import {ActionReducerMap, State} from '@ngrx/store';

export * from './tutorial.reducer';
export * from './books.reducer';

import {Tutorial, Books} from './../models';
import {booksReducer} from './books.reducer';
import {tutorialsReducer} from './tutorial.reducer';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly books: Books[];
}


export const reducers = {
  tutorial: tutorialsReducer,
  books: booksReducer,
};
