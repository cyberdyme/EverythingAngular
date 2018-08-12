import {Injectable} from '@angular/core';
import {DataProviderService, SearchDto} from './services/dataprovider.service';
import {Observable} from 'rxjs';
import {MasterDefault} from './search-master-defaults/models/master-defaults';
import {map} from 'rxjs/operators';


@Injectable()
export class MasterDefaultsService {
  constructor(private dataProvider: DataProviderService) {
  }

  getSearchDtos(): Observable<MasterDefault[]> {
   return this.dataProvider.getSearchDtos('global').pipe(map<SearchDto[],
     MasterDefault[]>( x => {
       const items: MasterDefault[] = [];
       x.forEach(y => {
         items.push({
            id: y.id.toString(),
           searchInfo: {
              lastUpdateBy: y.lastUpdateBy,
              baseKey: {
                region: y.baseKey.region,
                model: y.baseKey.model
              }
           }
         });
       });

       return items;
   }));
  }
}

