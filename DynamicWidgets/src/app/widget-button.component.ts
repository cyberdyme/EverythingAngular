import {Component, Input, OnInit} from '@angular/core';
import {IWidget, WidgetBaseComponent} from './widget-base.component';

@Component({
  selector: 'app-widget-button',
  templateUrl: './widget-button.component.html',
  styleUrls: ['./widget-button.component.css']
})
export class WidgetButtonComponent extends WidgetBaseComponent implements OnInit, IWidget {
  constructor() {
    super();
    this.type = WidgetButtonComponent;
  }

  ngOnInit() {
  }
}
