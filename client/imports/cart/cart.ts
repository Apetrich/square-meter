import { Random } from 'meteor/random';
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductItem } from '../../../both/interfaces/product.interface';
import { Items } from '../../../both/collections/items.collection';

import template from './cart.html';

@Component({
  selector: 'cart',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class Cart implements OnInit {

  items: Mongo.Cursor<ProductItem>;
  public isCartVisible: boolean;

  constructor () {
    this.isCartVisible = false;
    if(localStorage.getItem("user_id") == null) {
        localStorage.setItem("user_id", Random.id());
    }

    alert(localStorage.getItem("user_id"));
  }

  public toggleCart() {
   

    this.isCartVisible = !this.isCartVisible;

     alert(this.isCartVisible);
  }

  ngOnInit() {
    this.items = Items.find();
    alert(this.items);
  }
}