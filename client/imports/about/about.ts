import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './about.html';

@Component({
  selector: 'about',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class About {
  constructor() {}
}