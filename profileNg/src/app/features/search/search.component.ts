import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAll, selectEntities} from './reducers/search.reducer';
import {Observable} from 'rxjs';
import {SearchModel} from './search.model';
import {LoadingSearchItems} from './actions/search.actions';
import {SearchState} from './state/search.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search$: Observable<SearchModel[]>;

  constructor(private store: Store<SearchState>) { }

  ngOnInit() {
    this.search$ = this.store.pipe(select(selectAll));

    //this.store.dispatch(new LoadingSearchItems({name: 'girish', age: 46}));
    //this.store.dispatch(new LoadingSearchItems({name: 'monisha', age: 46}));

  }

}
