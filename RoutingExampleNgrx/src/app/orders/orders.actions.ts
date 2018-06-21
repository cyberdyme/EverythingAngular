import { Action } from '@ngrx/store';
import { Orders } from './orders.model';

export enum OrdersActionTypes {
  ADD_ONE = '[Order] Add One',
  UPDATE_ONE = '[Order] Update One',
  DELETE_ONE = '[Order] Delete One',
  GET_ALL = '[Order] Get All'
}
export class AddOne implements Action {
  readonly type = OrdersActionTypes.ADD_ONE;
  constructor(public order: Orders) { }
}
export class UpdateOne implements Action {
  readonly type = OrdersActionTypes.UPDATE_ONE;
  constructor(
    public id: string,
    public changes: Partial<Orders>,
  ) { }
}
export class DeleteOne implements Action {
  readonly type = OrdersActionTypes.DELETE_ONE;
  constructor(public id: string) { }
}
export class GetAll implements Action {
  readonly type = OrdersActionTypes.GET_ALL;
  constructor(public orders: Orders[]) { }
}

export type OrdersActions
  = AddOne
  | UpdateOne
  | DeleteOne
  | GetAll;
