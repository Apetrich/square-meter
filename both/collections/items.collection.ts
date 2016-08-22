import {ProductItem} from '../interfaces/product.interface';

export const Items = new Mongo.Collection<ProductItem>('items');