# RoutingExampleNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


======================================

npm install @ngrx/store --save
npm install @ngrx/effects --save
npm install @ngrx/router-store --save
npm install @ngrx/store-devtools --save
npm install @ngrx/schematics --save-dev

ng config cli.defaultCollection @ngrx/schematics

ng generate store State --root --module app.module.ts
ng config cli.defaultCollection @ngrx/schematics


__from within customer directory__

ng generate feature customers --module app/customers/customers.module.ts --dry-run

__within orders directory__
ng generate feature orders --module orders.module.ts --dry-run



https://medium.com/ngrx/introducing-ngrx-entity-598176456e15
https://github.com/ngrx/platform/tree/master/example-app/app
