import { ProductsProps } from '../product/product'

export interface IStock {
  quantity: number
  product: ProductsProps
}

export class Stock {
  constructor(public stock: IStock) {}

  get quantity(): number {
    return this.stock.quantity
  }

  get product(): ProductsProps {
    return this.stock.product
  }
}
