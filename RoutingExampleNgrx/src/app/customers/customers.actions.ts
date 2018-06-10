import {Action} from '@ngrx/store';
import {CustomerModel} from './customers.model';

export enum CustomersActionTypes {
  LoadCustomers = '[Customers] Load Customers'
}

export class LoadCustomers implements Action {
  readonly type = CustomersActionTypes.LoadCustomers;

  constructor(public payload: CustomerModel) {

  }
}

export type CustomersActions = LoadCustomers;
