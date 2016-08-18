import 'reflect-metadata';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { Home } from './imports/home/home.ts';
import { Catalog } from './imports/catalog/catalog.ts';
import { Item } from './imports/item/item.ts';
import { Constructor } from './imports/constructor/constructor.ts';
import { Contact } from './imports/contact/contact.ts';
import { About } from './imports/about/about.ts';

import template from './app.html';

@Component({
   selector: 'app',
   template,
   directives: [ROUTER_DIRECTIVES]
 })

class SquareMeter {
  constructor () {
  }
}

const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'catalog', component: Catalog },
  { path: 'item/:itemId', component: Item },
  { path: 'constructor/:itemId', component: Constructor }
];

const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

bootstrap(SquareMeter, [APP_ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
