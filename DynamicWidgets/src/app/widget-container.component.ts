import {Component, ComponentFactoryResolver, Injector, Input, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {IWidget} from './widget-base.component';
import {WidgetButtonComponent} from './widget-button.component';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnInit {
  @Input('data') data: any[];

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver) {

  }

  public ChangeWidgetType(widgetType: Type<IWidget>, content?: string) {
    if (!widgetType) {
      console.log('Invalid widget type specified');
    }

    const factory = this.cfr.resolveComponentFactory(widgetType);
    const componentRef = factory.create(this.injector);
    this.vc.insert(componentRef.hostView);
    componentRef.instance.title = content;

  }

  ngOnInit(): void {
    this.data.forEach(x =>  this.ChangeWidgetType(WidgetButtonComponent, x));
  }
}
