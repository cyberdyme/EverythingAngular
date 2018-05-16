import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DemoService {
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getFoods() {
    return this.http.get('http://localhost:3000/api/food').subscribe(
      res => {
        const writer = res;
        console.log(writer);
      },
      err => {
        console.log(err);
      });
  }
}
