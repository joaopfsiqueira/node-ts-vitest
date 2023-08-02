import { Product } from '../entities/product/product'

interface ICreateProductRequest {
  id: number
  name: string
  price: number
  description: string
}

type CreateProductResponse = Product

export class CreateProduct {
  async execute({ id, name, price, description }: ICreateProductRequest): Promise<CreateProductResponse> {
    const product = new Product({ id, name, price, description })

    return product
  }
}
