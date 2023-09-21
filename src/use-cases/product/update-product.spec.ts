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

    it('should not be able to update an not exist product', async () => {
        const productRepository = new InMemoryProductRepository(MockProduct)
        const updateProduct = new UpdateProduct(productRepository)

        const wrapper = async () => {
            await updateProduct.execute({
                id: 2,
                name: 'Notebook novo',
                price: 1000,
                description: 'Notebook',
            })
        }

        await expect(wrapper).rejects.toThrowError('Product does not exists')
        //nesse caso, utilizei rejects por ser uma função async, e o await irá retornar uma Promise da função wrapper que chama o execute. Essa forma é melhor para validar retornos de uma função que não seja um objeto ou algo poupável na grande parte do tempo, nesse exemplo, um new Error.
    })
})
