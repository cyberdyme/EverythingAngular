import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getAllOrders, selectAll, selectTotal} from '../orders.reducer';
import {Observable} from 'rxjs';
import {AddOne} from '../orders.actions';
import {OrdersState} from '../orders.state';
import {Order} from '../orders.model';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  order$: Observable<Order[]>;
  count$: Observable<number>;

  constructor(private store: Store<OrdersState>) {
    this.order$ = this.store.pipe(select(selectAll));
    this.count$ = this.store.pipe(select(selectTotal));

    this.store.dispatch(new AddOne({id: 'girish', title: 'TITLE'}));
    this.store.dispatch(new AddOne({id: 'girish', title: 'TITLE'}));

  }

  ngOnInit() {
  }

}
