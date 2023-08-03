import { IProduct } from '../../entities/product/product'
import { ProductRepository } from '../products-repository'

export class InMemoryProductRepository implements ProductRepository {
  public items: IProduct[] = []

  async create(product: IProduct): Promise<void> {
    this.items.push(product)
  }

  checkIfExist(product_id: number): boolean {
    return this.items.some((objeto) => objeto.id === product_id)
  }
}
