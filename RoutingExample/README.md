# RoutingExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.


#Yarn
npm i --global yarn

**how to install yarn**
npm update -g yarn


#Project Setup

ng new RoutingExample --minimal --routing

Configure the package manager

To enable yarn for Angular CLI you have to run the following command:
ng config -g cli.packageManager yarn

If at any point you want to revert back to npm run this:
ng config -g cli.packageManager npm


Create feature module
ng generate module customers --routing
ng generate component customers/customer-list

ng generate module orders --routing
ng generate component orders/orders-list
