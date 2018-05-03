import {Component, ComponentFactoryResolver, Injector, OnInit, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {IWidget} from './widget-base.component';
import {WidgetButtonComponent} from './widget-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver) {

  }

  public ChangeWidgetType(widgetType: Type<IWidget>) {
    if (!widgetType) {
      console.log('Invalid widget type specified');
    }

    const factory = this.cfr.resolveComponentFactory(widgetType);
    const componentRef = factory.create(this.injector);

    this.vc.clear();
    this.vc.insert(componentRef.hostView);

  }

  ngOnInit(): void {
    this.ChangeWidgetType(WidgetButtonComponent);
  }
}
