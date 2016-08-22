export interface Product {
  _id?: string;
  name: string;
  description?: string;
  cost_price: number;
  sale_price?: number;
  currency: string;
  is_new: boolean;
  //category_id: string;
  //product_id: string;
}

export interface ProductItem extends Product  {
  quantity: number;
}
