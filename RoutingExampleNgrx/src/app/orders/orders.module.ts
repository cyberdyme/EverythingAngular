import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromOrders from './orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './orders.effects';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', fromOrders.reducer),
    EffectsModule.forFeature([OrdersEffects])
  ],
  declarations: [OrdersListComponent]
})
export class OrdersModule { }
