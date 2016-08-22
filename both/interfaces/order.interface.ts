import { ProductItem } from './product.interface';

export interface Order {
  _id?: string;
  product_items: Array<ProductItem>;
}