import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SearchModel } from './features/search/search.model';
export class AppInMemoryApi implements InMemoryDbService {
  createDb() {
    const searchModel: SearchModel[] = [
      {
        id: '22',
        version: 3,
        baseKey: {
          region: 'testRegion1',
          undRegionGroup: 'region1',
          swapGroup: 'testSwapGroup1',
          modelGroup: 'modelGroup1'
        },
        lastUpdatedTime: '2018-04-04T10:04:46.295',
        lastUpdatedBy: 'anyOne1',
        reviewedBy: 'anyOne1',
        reviewedTime: '2018-04-04T10:04:46.31'
      },
      {
        id: '85',
        version: 2,
        baseKey: {
          region: 'testRegion2',
          undRegionGroup: 'region2',
          swapGroup: 'testSwapGroup2',
          modelGroup: 'modelGroup2'
        },
        lastUpdatedTime: '2018-05-21T12:05:55.526',
        lastUpdatedBy: 'anyOne2',
        reviewedBy: 'anyOne2',
        reviewedTime: '2018-05-21T12:05:55.528'
      }
    ];

    return { 'searchModels': searchModel };
  }
}
