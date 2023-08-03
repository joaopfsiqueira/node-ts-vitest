import { ProductsProps } from '../../entities/product/product'
import { ProductRepository } from '../products-repository'

export class InMemoryProductRepository implements ProductRepository {
  public items: ProductsProps[] = []

  async create(product: ProductsProps): Promise<void> {
    this.items.push(product)
  }

  async checkIfExist(product_id: number): Promise<boolean> {
    return this.items.some((objeto) => objeto.id === product_id)
  }
}
