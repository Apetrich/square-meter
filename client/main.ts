import {Meteor} from 'meteor/meteor';
import { Products } from '../both/collections/products.collection';

Meteor.startup(() => {

  if (Products.find().count() === 0) {
    
    const products = [
      {
        name: "Кухня \"Жора\"",
        description: "Для тех кто жевал, жует и будет жевать...",
        cost_price: 50000,
        currency: "KZT",
        is_new: true
      },
      {
        name: "Кухня \"Жорик\"",
        description: "Для тех кто жевал, жует и будет жевать...",
        cost_price: 80000,
        sale_price: 40000,
        currency: "KZT",
        is_new: false
      },
      {
        name: "Кухня \"Вареник\"",
        description: "Для кто переваривает",
        cost_price: 60000,
        currency: "KZT",
        is_new: false
      }
    ];
    products.forEach((product) => Products.insert(product));
  }
});

