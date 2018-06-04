import {Action} from '@ngrx/store';
import {BookState} from '../reducers/appState';

export const LOAD_BOOKS = '[BOOKS] Load';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;

  constructor(public payload: BookState) {
  }
}


export type BookActions = LoadBooks;
