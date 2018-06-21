import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { OrdersActions, OrdersActionTypes } from './orders.actions';

@Injectable()
export class OrdersEffects {

  @Effect()
  effect$ = this.actions$.ofType(OrdersActionTypes.GET_ALL);

  constructor(private actions$: Actions) {}
}
