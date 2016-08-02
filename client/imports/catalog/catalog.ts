import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './catalog.html';

@Component({
  selector: 'catalog',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class Catalog {
  constructor() {}
}