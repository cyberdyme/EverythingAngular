import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {BookState, TutorialState, AppState} from '../reducers/appState';
import {RemoveTutorial} from '../actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html'
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<TutorialState[]>;
  books$: Observable<BookState[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials$ = store.select(state => state.tutorial);
    this.books$ = store.select(state => state.books);
  }

  delTutorial(index) {
    this.store.dispatch(new RemoveTutorial(index));
  }

  ngOnInit() {
  }

}
