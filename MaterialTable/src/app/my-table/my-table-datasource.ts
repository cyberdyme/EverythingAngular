import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MyTableItem {
  name: string;
  id: number;
  cost?: number;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: MyTableItem[] = [
  {id: 1, name: 'Hydrogen', cost: 1},
  {id: 2, name: 'Helium', cost: 2},
  {id: 3, name: 'Lithium', cost: 3},
  {id: 4, name: 'Beryllium', cost: 4},
  {id: 5, name: 'Boron', cost: 5},
  {id: 6, name: 'Carbon', cost: 6},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10, name: 'Neon'},
  {id: 11, name: 'Sodium'},
  {id: 12, name: 'Magnesium'},
  {id: 13, name: 'Aluminum'},
  {id: 14, name: 'Silicon'},
  {id: 15, name: 'Phosphorus'},
  {id: 16, name: 'Sulfur'},
  {id: 17, name: 'Chlorine'},
  {id: 18, name: 'Argon'},
  {id: 19, name: 'Potassium'},
  {id: 20, name: 'Calcium'},
];
