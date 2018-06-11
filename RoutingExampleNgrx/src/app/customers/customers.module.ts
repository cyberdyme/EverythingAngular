import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { StoreModule } from '@ngrx/store';
import * as fromCustomers from './customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './customers.effects';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customerReducer', fromCustomers.customerReducer),
 /*   EffectsModule.forFeature([CustomersEffects])*/
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
