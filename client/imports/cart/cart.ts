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
  public amount: number;
  public sum: number;

  constructor () {
    this.isCartVisible = false;
    if(localStorage.getItem("user_id") == null) {
        localStorage.setItem("user_id", Random.id());
    }
  }

  public toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  public removeItem(item) {
    Items.remove(item._id);
  }


  ngOnInit() {    
    this.sum = 0;

    this.items = Items.find({}, {limit: 2});
    Items.find().forEach(item => this.sum += item.quantity * item.cost_price);
    this.amount = Items.find({}).count();
  }
}