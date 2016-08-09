import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './constructor.html';

@Component({
  selector: 'constructor',
  template,
  directives: [ROUTER_DIRECTIVES]
})

export class Constructor {
  constructor() {}
}