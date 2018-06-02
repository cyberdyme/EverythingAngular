import {Tutorial, Books} from './models';

export interface AppState {
  readonly tutorial: Tutorial[];
  readonly books: Books[];
}
