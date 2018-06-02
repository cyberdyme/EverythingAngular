import {Action} from '@ngrx/store';
import {Books} from '../models';


export const LOAD_BOOKS = '[BOOKS] Load';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;

  constructor(public payload: Books) {
  }
}


export type BookActions = LoadBooks;
