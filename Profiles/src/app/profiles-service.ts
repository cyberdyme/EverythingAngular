import {Injectable} from '@angular/core';
import {DataProviderService, SearchDto} from './services/dataprovider.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Profile} from './search-profiles/models/profiles';

@Injectable()
export class ProfilesService {
  constructor(private dataProvider: DataProviderService) {

  }

  getSearchDtos(): Observable<Profile[]> {
    return this.dataProvider.getSearchDtos('global').pipe(map<SearchDto[],
      Profile[]>(x => {
      const items: Profile[] = [];
      x.forEach(y => {
        items.push({
          id: y.id.toString(),
          searchInfo: {
            lastUpdateBy: y.lastUpdateBy,
            baseKey: {
              region: y.baseKey.region,
              swapGroup: '',
              model: y.baseKey.model
            }
          }
        });
      });

      return items;
    }));
  }
}
