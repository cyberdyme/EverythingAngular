import {Action, createSelector} from '@ngrx/store';
import { CustomersActions, CustomersActionTypes } from './customers.actions';
import {AppState} from '../reducers';
import {CustomerModel} from './customers.model';


export interface CustomerState extends AppState {
  customerReducer: CustomerModel;
}

export const initialState: CustomerState = {
  customerReducer: {name: 'test', age: 99 }
};

export function customerReducer(state: CustomerState = initialState, action: CustomersActions): CustomerState {
  switch (action.type) {
    case CustomersActionTypes.LoadCustomers:
      console.log('reducing ' + action.payload.name)
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

export const getCustomerState = (state: CustomerState) => state.customerReducer;
export const customerNames = createSelector(getCustomerState, (x: CustomerModel)  => x.name);
