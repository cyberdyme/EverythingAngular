import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: "ng-template[key], ng-template[dataContext]"
})
export class DataTemplateDirective {
  @Input() key: string;
  @Input() dataContext: string;

  constructor(public template: TemplateRef<any>) {
  }
}
