import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './contact.html';

@Component({
  selector: 'contact',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class Contact {
  constructor() {}
}