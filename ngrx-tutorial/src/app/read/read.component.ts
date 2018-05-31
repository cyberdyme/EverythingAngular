import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Tutorial} from './../models/tutorial.model';
import {AppState} from './../app.state';
import {Observable} from 'rxjs';
import * as TutorialActions from './../actions/tutorial.actions';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html'
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {
  }

}
