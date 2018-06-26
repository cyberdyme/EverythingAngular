import {EntityState} from '@ngrx/entity';
import {Order} from './orders.model';

export interface OrdersState extends EntityState<Order> {}
export const defaultOrders = {
  ids: ['123'],
  entities : {
    '123' : {
      id: '123',
      title: 'small'
    }
  }
}
