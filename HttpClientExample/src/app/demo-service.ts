import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFood} from './app.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getFoods(): Observable<IFood> {
    return this.http.get<IFood>('http://localhost:3000/api/food');
  }
}
