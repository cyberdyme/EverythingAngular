import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {DataTemplateDirective} from './data-template.directive';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements AfterContentInit {
  @Input() items: any[];

  @ContentChildren(DataTemplateDirective) templates: QueryList<DataTemplateDirective>;

  dict = {};

  ngAfterContentInit() {
    this.templates.forEach(x => {
      this.dict[x.key] = x.template;
    });
  }
}
