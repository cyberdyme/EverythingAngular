import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTutorial from './tutorial.reducer';
import * as fromBook from './books.reducer';
import {AppState} from './appState';


export const reducers: ActionReducerMap<AppState> = {
  tutorial: fromTutorial.tutorialsReducer,
  books: fromBook.booksReducer
}
;


export const getTutorialsState = createFeatureSelector<AppState>('tutorial');

/*
export const getTutorials = createSelector(getTutorialsState, (state: fromTutorial.TutorialState) => state.name);
*/
