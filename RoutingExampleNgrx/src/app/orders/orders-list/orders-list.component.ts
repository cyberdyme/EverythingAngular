import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OrderState, selectAll} from '../orders.reducer';
import {Observable} from 'rxjs';
import {Orders} from '../orders.model';
import {AddOne} from '../orders.actions';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  order$: Observable<Orders[]>;

  constructor(private store: Store<OrderState>) {
    this.order$ = this.store.pipe(selectAll);

    this.store.dispatch(new AddOne({id: 'girish', title: 'TITLE'}));
    this.store.dispatch(new AddOne({id: 'girish', title: 'TITLE'}));

  }

  ngOnInit() {
  }

}
