import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CustomersActionTypes } from './customers.actions';

@Injectable()
export class CustomersEffects {

  @Effect()
  effect$ = this.actions$.ofType(CustomersActionTypes.LoadCustomers);

  constructor(private actions$: Actions) {}
}
