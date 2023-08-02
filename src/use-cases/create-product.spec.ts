import { describe, expect, it } from 'vitest'
import { CreateProduct } from './create-product'
import { Product } from '../entities/product/product'

describe('Create Product', () => {
  it('should be able to create an product', () => {
    const createProduct = new CreateProduct()

    expect(
      createProduct.execute({
        id: 1,
        name: 'Notebook',
        price: 1000,
        description: 'Notebook Dell G15 - 8GB RAM - RTX1050 - I5 11H',
      }),
    ).resolves.toBeInstanceOf(Product)
  })
})
