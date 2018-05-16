import { Component } from '@angular/core';
import {DemoService} from './demo-service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators';

export interface IFood {
  id: string;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private demoService: DemoService) {
    this.populateFoods();
    this.getFoods$ =  this.demoService.getFoods();
  }

  private foods: IFood[];
  private  getFoods$: Observable<IFood[]>;

  populateFoods() {
    this.demoService.getFoods().subscribe(x => this.foods = x);
  }

  getFoods(): Observable<IFood[]> {
    return this.demoService.getFoods();
  }
}
