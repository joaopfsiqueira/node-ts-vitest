import { ProductsProps } from '../entities/product/product'

export interface ProductRepository {
  create(product: ProductsProps): Promise<void>
  checkIfExist(product_id: number): Promise<boolean>
}
