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
    this.getFoods();
  }

  private foods: IFood[];

  getFoods(): Observable<IFood> {
    return this.demoService.getFoods().pipe(map((x: IFood)  => {
      return x;
    }), tap((x: IFood) => {
        console.log(x);
        this.foods.push(x);
      }
    ));
  }
}
