import {Action, createSelector} from '@ngrx/store';
import { CustomersActions, CustomersActionTypes } from './customers.actions';
import {AppState} from '../reducers';
import {CustomerModel} from './customers.model';


export interface CustomerState extends AppState {
  customer: CustomerModel;
}

export const initialState: CustomerState = {
  customer: {name: 'test', age: 99 }
};

export function reducer(state: CustomerState = initialState, action: CustomersActions): CustomerState {
  switch (action.type) {
    case CustomersActionTypes.LoadCustomers:
      console.log('reducing ' + action.payload.name)
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export const getCustomerState = (state: CustomerState) => state.customer;
export const customerNames = createSelector(getCustomerState, (x: CustomerModel)  => x.name);
