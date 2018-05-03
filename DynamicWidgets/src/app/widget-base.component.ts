import { Component, OnInit, Type } from '@angular/core';


export interface IWidget {
  type: Type<IWidget>;
}

@Component({
  selector: 'app-widget-base',
  templateUrl: './widget-base.component.html',
  styleUrls: ['./widget-base.component.css']
})
export class WidgetBaseComponent implements OnInit, IWidget {
  public type: Type<IWidget>;

  constructor() { }

  ngOnInit() {
  }
}
