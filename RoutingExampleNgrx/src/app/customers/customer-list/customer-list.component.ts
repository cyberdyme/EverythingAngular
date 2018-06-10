import {Component, OnInit} from '@angular/core';
import {customerNames, CustomerState, getCustomerState} from '../customers.reducer';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LoadCustomers} from '../customers.actions';
import {CustomerModel} from '../customers.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customer$: Observable<CustomerModel>;

  constructor(private store: Store<CustomerState>) {
    this.customer$ = this.store.pipe(select(getCustomerState));

    this.store.dispatch(new LoadCustomers({name: 'girish', age: 46}));
    this.store.dispatch(new LoadCustomers({name: 'monisha', age: 46}));
  }
}
