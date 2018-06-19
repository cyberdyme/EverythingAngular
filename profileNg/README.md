# ProfileNg

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


===============================

yarn add @ngrx/schematics --dev
yarn add @ngrx/{store,effects,entity,store-devtools}

ng config cli.defaultCollection @ngrx/schematics
ng generate store State --root --module app.module.ts
ng generate @ngrx/schematics:effect App --root --module app.module.ts
ng config cli.defaultCollection @ngrx/schematics


ng generate feature Search --group
ng generate module search --routing --dry-run

=============================================

npm install github:ngrx/schematics-builds --save-dev
npm install @ngrx/{store,effects,entity,store-devtools} --save

ng config cli.defaultCollection @ngrx/schematics

ng generate store State --root --module app.module.ts
ng config cli.defaultCollection @ngrx/schematics


__from within customer directory__

ng generate feature customers --module app/customers/customers.module.ts --dry-run
