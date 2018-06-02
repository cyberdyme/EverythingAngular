import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Books, Tutorial} from '../models';
import {AppState} from '../reducers';
import {RemoveTutorial} from '../actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html'
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;
  books$: Observable<Books[]>;

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
