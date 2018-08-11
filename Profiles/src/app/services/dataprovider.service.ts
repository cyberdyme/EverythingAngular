import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface BaseKeyDto {
  region?: string;
  swapGroup?: string;
  model?: string;
}

export interface SearchDto {
  id: string;
  lastUpdateBy: string;
  lastUpdateTime?: Date;
  baseKey?: BaseKeyDto;
}

@Injectable({providedIn: 'root'})
export class DataProviderService {
  constructor(private http: HttpClient) {

  }

  getSearchDtos(searchType: string): Observable<SearchDto[]> {

    if (searchType === 'client') {
      return of<SearchDto[]>([
        {
          id: '1',
          lastUpdateBy: 'zk07tkh',
          baseKey: {
            region: 'EMEA',
            swapGroup: 'BLACK_ROCK',
            model: 'FUTURES'
          }
        }
      ]);
    }

    if (searchType === 'global') {
      return of<SearchDto[]>([
        {
          id: '2',
          lastUpdateBy: 'rocket',
          baseKey: {
            region: 'EMEA',
            model: 'EQUITIES'
          }
        }
      ]);
    }

    return this.http.get<SearchDto[]>(`http://usvxpespq16.sdi.corp.bankofamerica.com:7100/rulebase/${searchType}/baseKeys`);
  }
}
