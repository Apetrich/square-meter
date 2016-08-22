import { Mongo } from 'meteor/mongo';

import { Products }   from '../../../both/collections/products.collection';

import { Product } from '../../../both/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './catalog.html';

@Component({
  selector: 'catalog',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class Catalog implements OnInit {
  products: Mongo.Cursor<Product>;

  ngOnInit() {
    this.products = Products.find();
  }
}