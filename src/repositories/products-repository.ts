import { IProduct } from '../entities/product/product'

export interface ProductRepository {
  create(product: IProduct): Promise<void>
  checkIfExist(product_id: number): boolean
}
