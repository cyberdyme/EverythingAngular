import {SearchModel} from '../search.model';
import {EntityState} from '@ngrx/entity';

export interface SearchState extends EntityState<SearchModel> {}
export const defaultSearchState = {
  ids: ['123'],
  entities : {
    '123' : {
      id: '123',
      version: 2,
      baseKey : {
        region: 'APAC',
        undRegionGroup: 'Asia',
        swapGroup: 'alpha22aTest1',
        modelGroup: 'CVT1'
      },
      lastUpdateTime: '',
      lastUpdateBy: '',
      reviewBy: '',
      reviewedTime: ''
    }
  }
}
