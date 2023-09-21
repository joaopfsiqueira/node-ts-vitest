import { describe, expect, it } from 'vitest'
import { UpdateProduct } from './update-product'
import { InMemoryProductRepository } from '../../repositories/in-memory/in-memory-products-repository'
import { MockProduct } from '../../repositories/mocks/mocks'

describe('Update Product', () => {
    it('should be able to update an exist product', async () => {
        const productRepository = new InMemoryProductRepository(MockProduct)
        const updateProduct = new UpdateProduct(productRepository)

        const productToUpdate = await updateProduct.execute({
            id: 1,
            name: 'Notebook novo',
            price: 1000,
            description: 'Notebook',
        })

        expect(productToUpdate).toEqual({ status: 200, message: 'Product updated successfully' })
    })
})
