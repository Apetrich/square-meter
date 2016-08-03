import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './item.html';

@Component({
  selector: 'item',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class Item {
  constructor() {}
}