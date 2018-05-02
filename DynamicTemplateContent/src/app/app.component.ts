import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  questions = [
    { question: 'my checkbox question', type: 'check', values: ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4'] },
    { question: 'my radiobutton question', type: 'radio', values: ['radio1', 'radio2', 'radio3', 'radio4'] } ,
    { question: 'my boolean question', type: 'bool', values: ['yes', 'no'] } ,
    { question: 'my textbox question', type: 'textbox', values: ['maybe something maybe nothing'] },
    { question: 'my  question', type: 'question', values: ['maybe something maybe nothing'] }
  ];

  getTemplateContext() {
    return {
      $implicit: '[implict]',
      details: '[details]'
    };
  }
}
