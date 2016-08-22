import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProductItem } from '../../../both/interfaces/product.interface';
import { Items } from '../../../both/collections/items.collection';

import template from './item.html';

@Component({
  selector: 'item',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class Item {

  items: Mongo.Cursor<ProductItem>;

  constructor() {}

  public addToCart() {
      let newItem = {
        name: "Кухня \"Жора\"",
        description: "Для тех кто жевал, жует и будет жевать...",
        cost_price: 50000,
        currency: "KZT",
        is_new: true,
        quantity: 1,
        user_token: localStorage.getItem("user_id")
      }

      Items.insert(newItem);
  }

}