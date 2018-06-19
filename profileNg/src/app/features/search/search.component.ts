import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getSearchState, SearchState} from './reducers/search.reducer';
import {Observable} from 'rxjs';
import {SearchModel} from './search.model';
import {LoadSearchs} from './actions/search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search$: Observable<SearchModel>;

  constructor(private store: Store<SearchState>) { }

  ngOnInit() {
    this.search$ = this.store.pipe(select(getSearchState));

    this.store.dispatch(new LoadSearchs({name: 'girish', age: 46}));
    this.store.dispatch(new LoadSearchs({name: 'monisha', age: 46}));

  }

}
