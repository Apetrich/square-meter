import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './checkout.html';

@Component({
  selector: 'checkout',
  template,
  directives: [ROUTER_DIRECTIVES]
})

export class Checkout {
  constructor() {}
}