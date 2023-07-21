import { IProduct } from '../product/product';

export interface IStock {
  quantity: number;
  product: IProduct;
}

export class Stock {
  constructor(public stock: IStock) {}
}
