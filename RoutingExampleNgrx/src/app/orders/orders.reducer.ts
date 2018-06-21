import {OrdersActions, OrdersActionTypes} from './orders.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Orders} from './orders.model';

export interface OrderState extends EntityState<Orders> {
}

export const orderAdapter = createEntityAdapter<Orders>();
export const initialState: OrderState = orderAdapter.getInitialState();

export function reducer(state = initialState, action: OrdersActions): OrderState {
  switch (action.type) {
    case OrdersActionTypes.ADD_ONE:
      return orderAdapter.addOne(action.order, state);
    case OrdersActionTypes.UPDATE_ONE:
      return orderAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);
    case OrdersActionTypes.DELETE_ONE:
      return orderAdapter.removeOne(action.id, state);
    case OrdersActionTypes.GET_ALL:
      return orderAdapter.addAll(action.orders, state);
    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = orderAdapter.getSelectors();
