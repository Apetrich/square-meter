import {Mongo} from 'meteor/mongo';
import {Product} from '../interfaces/product.interface';

export const Products = new Mongo.Collection<Product>('products');;