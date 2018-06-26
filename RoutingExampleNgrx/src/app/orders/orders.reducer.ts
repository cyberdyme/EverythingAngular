import {OrdersActions, OrdersActionTypes} from './orders.actions';
import {createEntityAdapter} from '@ngrx/entity';
import {Order} from './orders.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {defaultOrders, OrdersState} from './orders.state';

export const orderAdapter = createEntityAdapter<Order>();
export const initialState: OrdersState = orderAdapter.getInitialState(defaultOrders);

export function reducer(state = initialState, action: OrdersActions): OrdersState {
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


export const getOrdersState = createFeatureSelector<OrdersState>('orders');
export const getAllOrders = createSelector(getOrdersState, (x: OrdersState) => x.entities.select(y => y.valueOf()));

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = orderAdapter.getSelectors(getOrdersState);
